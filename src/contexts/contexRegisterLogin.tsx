import { createContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { ContexRegisterLoginData, UserFormData } from "../@types/types";
import { apiLocal } from "../services/api";
import { toast } from "react-toastify";

export const RegisterLoginContext = createContext<ContexRegisterLoginData>(
  {} as ContexRegisterLoginData
);

export const RegisterLoginProvider = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [complement, setComplement] = useState<string>("");

  const handleSubmitLogin: SubmitHandler<UserFormData> = async (datas) => {
    setLoading(true);
    let newData = {
      email: datas.email.toLowerCase(),
      password: datas.password
    }
    try {
      console.log(datas);
      const response = await apiLocal.post(`/login`,newData);
      console.log(response.data)
      localStorage.setItem("MotorShopToken", response.data.token);
      toast.success("Login feito com Sucesso", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/")
    } catch (error) {
      console.log(error);
      toast.error("Emailou senhas Incorretas", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRegister: SubmitHandler<any> = async (datas) => {
    setLoading(true);
    let newData:any = {
      name: datas.name,
      email: datas.email.toLowerCase(),
      cpf: datas.cpf,
      phone_number: datas.phone_number,
      address:{
        cep: datas.cep,
        state: datas.state,
        city: datas.city,
        street: datas.street,
        number: datas.number,
      },
      birthdate: datas.birthdate,
      password: datas.password
    };
    if (description !== "") {
      newData.description = description;
    }
    if (complement !== "") {
      newData.address.complement = complement;
    }
    try {
      console.log(newData)
      const response = await apiLocal.post(`/users`,newData);
      console.log(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterLoginContext.Provider
      value={{
        handleSubmitLogin,
        loading,
        handleSubmitRegister,
        description,
        setDescription,
        complement,
        setComplement,
        navigate
      }}
    >
      <Outlet />
    </RegisterLoginContext.Provider>
  );
};
