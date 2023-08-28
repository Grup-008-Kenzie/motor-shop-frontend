import { createContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { ContexRegisterLoginData, UserFormData } from "../@types/types";
import { apiLocal } from "../services/api";

export const RegisterLoginContext = createContext<ContexRegisterLoginData>(
  {} as ContexRegisterLoginData
);

export const RegisterLoginProvider = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [complement, setComplement] = useState<string>("");

  const handleSubmitLogin: SubmitHandler<UserFormData> = async (datas) => {
    setLoading(true);
    try {
      console.log(datas);
      const response = await apiLocal.post(`/login`,datas);
      console.log(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRegister: SubmitHandler<any> = async (datas) => {
    setLoading(true);
    let newData:any = {
      name: datas.name,
      email: datas.email,
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
      }}
    >
      <Outlet />
    </RegisterLoginContext.Provider>
  );
};
