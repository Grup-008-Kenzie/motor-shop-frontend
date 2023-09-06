import { useContext } from "react";
import { GlobalContext } from "../../../contexts/contextGlobal";
import { ModalEditeUser } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData } from "../../../@types/types";
import { useForm } from "react-hook-form";

export const ModalUpdateUser = () => {
  const { navigate, usrInf, modalUpdateOn, setModalUpdateOn } =
    useContext(GlobalContext);

  modalUpdateOn
    ? document.body.classList.add("modal-open")
    : document.body.classList.remove("modal-open");

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    birthdate: yup.string().required("O campo de data não pode ficar vazio"),
    cpf: yup.string().required("O CPF não pode ficar vazio"),
    phone_number: yup
      .string()
      .required("O campo de Celular não pode ficar vazio"),
    cep: yup.string().required("O campo Cep não pode ficar vazio"),
    state: yup.string().required("O campo de Estado não pode ficar vazio"),
    city: yup.string().required("O campo de Cidade não pode ficar vazio"),
    street: yup.string().required("O campo rua não pode ficar vazio"),
    number: yup.string().required("O numero não pode ficar vazio"),
    password: yup.string().required("Senha Obrigatório"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não correspondem")
      .required("Esse campo não pode ficar vazio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(formSchema),
  });

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
        <form>
          <div className="containerInputs">
            <h3>Informacôes pessoais</h3>
            <div className="Inputs">
              <label htmlFor="Name">Nome</label>
              <input
                type="text"
                id="Name"
                placeholder="Ex: Samuel Leão"
                defaultValue={usrInf.name}
                // {...register("name")}
              />
              {/* <span className="error">{errors.name?.message}</span> */}
            </div>
            <div className="Inputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Ex: samuel@kenzie.com.br"
                defaultValue={usrInf.email}
                // {...register("email")}
              />
              {/* <span className="error">{errors.email?.message}</span> */}
            </div>
            <div className="Inputs">
              <label htmlFor="CPF">CPF</label>
              <input
                type="text"
                id="CPF"
                placeholder="000.000.000-00"
                defaultValue={usrInf.cpf}
                // {...register("cpf")}
              />
              {/* <span className="error">{errors.cpf?.message}</span> */}
            </div>
            <div className="Inputs">
              <label htmlFor="telephone">Celular</label>
              <input
                type="tel"
                id="telephone"
                placeholder="(DDD) 90000-0000"
                defaultValue={usrInf.phone_number}
                // {...register("phone_number")}
              />
              {/* <span className="error">{errors.phone_number?.message}</span> */}
            </div>
            <div className="Inputs">
              <label htmlFor="birthdate">Data de nascimento</label>
              <input
                type="date"
                id="birthdate"
                placeholder="00/00/00"
                defaultValue={usrInf.birthdate}
                // {...register("birthdate")}
              />
              {/* <span className="error">{errors.birthdate?.message}</span> */}
            </div>
            <div className="Inputs">
              <label htmlFor="description">Descrição</label>
              <textarea
                placeholder="Digitar descrição"
                id="descripition"
                wrap="soft"
                defaultValue={usrInf.description}
                // onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="buttons">
            <button
              type="button"
              onClick={() => setModalUpdateOn(!modalUpdateOn)}
            >
              Cancelar{" "}
            </button>
            <button>Deletar</button>
            <button type="submit">Salvar alteraçoes</button>
          </div>
        </form>
      </div>
    </ModalEditeUser>
  );
};
