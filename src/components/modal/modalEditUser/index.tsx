import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/contextGlobal";
import { ModalEditeUser, ModalUserDelete } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, UpdateFormData } from "../../../@types/types";
import { useForm } from "react-hook-form";
import { ButtonStandard } from "../../../styles/buttons";
import { RegisterLoginContext } from "../../../contexts/contexRegisterLogin";
import { apiLocal } from "../../../services/api";
import { toast } from "react-toastify";

export const ModalUpdateUser = () => {
  const {
    navigate,
    usrInf,
    modalUpdateOn,
    setModalUpdateOn,
    userInfo,
    modalDeleteOn,
    setModalDeleteOn,
  } = useContext(GlobalContext);

  const {} = useContext(RegisterLoginContext);

  const [phoneNumber, setPhoneNumber] = useState<string>(usrInf.phone_number);
  const [descriptionUpdate, setDescriptionUpdate] = useState<string>(
    usrInf.description
  );

  const formatPhoneNumber = (value: string): string => {
    const cleanedValue: string = value.replace(/\D/g, "");

    const formattedValue: string = cleanedValue.replace(
      /^(\d{2})(\d{1,5})(\d{0,4})$/,
      "($1) $2-$3"
    );

    return formattedValue;
  };

  modalUpdateOn
    ? document.body.classList.add("modal-open")
    : document.body.classList.remove("modal-open");

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    birthdate: yup.string().required("O campo de data não pode ficar vazio"),
    phone_number: yup
      .string()
      .required("O campo de Celular não pode ficar vazio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: yupResolver(formSchema),
  });

  const handlePhoneNumberChange = (e: any) => {
    const inputValue: string = e.target.value;
    const formattedPhoneNumber: string = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleSubmitUpdate: any = async (datas: any) => {
    const token = localStorage.getItem("MotorShopToken");
    let newData: any = {
      name: datas.name,
      email: datas.email.toLowerCase(),
      phone_number: datas.phone_number,
      birthdate: datas.birthdate,
    };
    if (descriptionUpdate !== "") {
      newData.description = descriptionUpdate;
    }
    if (datas.email.toLowerCase() === usrInf.email) {
      delete newData.email;
    }
    if (datas.phone_number === usrInf.phone_number) {
      delete newData.phone_number;
    }

    try {
      const response = await apiLocal.patch(`/user/${usrInf.id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Alterações salvas com sucesso", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setModalUpdateOn(!modalUpdateOn);
      userInfo(usrInf.id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalEditeUser
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setModalUpdateOn(!modalUpdateOn);
        }
      }}
    >
      <div className="cardForm">
        <div className="headerModal">
          <h2>Editar perfil</h2>
          <span
            className="buttonClose"
            onClick={() => setModalUpdateOn(!modalUpdateOn)}
          >
            x
          </span>
        </div>
        <form onSubmit={handleSubmit(handleSubmitUpdate)}>
          <div className="containerInputs">
            <h3>Informacôes pessoais</h3>
            <div className="Inputs">
              <label htmlFor="Name">Nome</label>
              <input
                type="text"
                id="Name"
                placeholder="Ex: Samuel Leão"
                defaultValue={usrInf.name}
                {...register("name")}
              />
              <span className="error">{errors.name?.message}</span>
            </div>
            <div className="Inputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Ex: samuel@kenzie.com.br"
                defaultValue={usrInf.email}
                {...register("email")}
              />
              <span className="error">{errors.email?.message}</span>
            </div>
            <div className="Inputs">
              <label htmlFor="telephone">Celular</label>
              <input
                type="tel"
                id="telephone"
                placeholder="(DDD) 90000-0000"
                defaultValue={usrInf.phone_number}
                {...register("phone_number")}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <span className="error">{errors.phone_number?.message}</span>
            </div>
            <div className="Inputs">
              <label htmlFor="birthdate">Data de nascimento</label>
              <input
                type="date"
                id="birthdate"
                placeholder="00/00/00"
                defaultValue={usrInf.birthdate}
                {...register("birthdate")}
              />
              <span className="error">{errors.birthdate?.message}</span>
            </div>
            <div className="Inputs">
              <label htmlFor="description">Descrição</label>
              <textarea
                placeholder="Digitar descrição"
                id="descripition"
                wrap="soft"
                defaultValue={usrInf.description}
                onChange={(e) => setDescriptionUpdate(e.target.value)}
              />
            </div>
          </div>
          <div className="buttons">
            <ButtonStandard
              bg="--Grey-5"
              color="--Grey-1"
              colorBorder="--Grey-5"
              HoverColorBorder="--Grey-4"
              HoverBgBorder="--Grey-4"
              type="button"
              onClick={() => setModalUpdateOn(!modalUpdateOn)}
            >
              Cancelar{" "}
            </ButtonStandard>
            <ButtonStandard
              bg="--alert2"
              color="--alert1"
              colorBorder="--alert2"
              HoverColorBorder="--alert1"
              onClick={() => {
                setModalDeleteOn(!modalDeleteOn);
                setModalUpdateOn(!modalUpdateOn);
              }}
            >
              Deletar
            </ButtonStandard>
            <ButtonStandard
              type="submit"
              bg="--brand1"
              color="--Grey-10"
              colorBorder="--brand1"
              HoverColorBorder="--brand1"
              HoverBgBorder="--brand1"
            >
              Salvar alteraçoes
            </ButtonStandard>
          </div>
        </form>
      </div>
    </ModalEditeUser>
  );
};

export const ModalDeleteUser = () => {
  const { navigate, usrInf,setUserInf, modalDeleteOn, setModalDeleteOn } =
    useContext(GlobalContext);

  const handleSubmitDeleteUser= async () => {
    const token = localStorage.getItem("MotorShopToken");
    try {
      const response = await apiLocal.delete(`/user/${usrInf.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Conta excluída com sucesso", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.removeItem("MotorShopToken");
      setUserInf("")
      navigate("/")
      setModalDeleteOn(false)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ModalUserDelete>
      <div className="container">
        <h2>Você deseja mesmo Deletar sua conta?</h2>
        <div className="buttons">
          <ButtonStandard
            bg="--alert1"
            color="--Grey-10"
            colorBorder="--alert2"
            HoverColorBorder="--alert1"
            onClick={handleSubmitDeleteUser}
          >
            Sim
          </ButtonStandard>
          <ButtonStandard
            type="submit"
            bg="--brand1"
            color="--Grey-10"
            colorBorder="--brand1"
            HoverColorBorder="--brand1"
            HoverBgBorder="--brand1"
            onClick={() => setModalDeleteOn(!modalDeleteOn)}
          >
            Não
          </ButtonStandard>
        </div>
      </div>
    </ModalUserDelete>
  );
};
