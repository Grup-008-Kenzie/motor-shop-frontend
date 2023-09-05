import { Link } from "react-router-dom";
import { FormLoginStyled } from "../../styles/Forms";
import { ButtonStandard } from "../../styles/buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserFormData } from "../../@types/types";
import { useContext, useState } from "react";
import { RegisterLoginContext } from "../../contexts/contexRegisterLogin";
import { apiLocal } from "../../services/api";
import { toast } from "react-toastify";

export const FormLogin = () => {
  const { handleSubmitLogin, loading }: any = useContext(RegisterLoginContext);

  const [passwordRecoveryOn, setPasswordRecoveryOn] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState("");

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
  });
  const formSchemaEmail = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
  });

  const { register, handleSubmit } = useForm<UserFormData>({
    resolver: yupResolver(formSchema),
  });
  const handleRecoverPassword = async (event: any) => {
    event.preventDefault();

    try {
      const response = await apiLocal.post(`/users/resetPassword`, emailValue.toLowerCase());
      console.log(response)
      toast.success("E-mail Enviado com sucesso", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error: any) {
      console.log(error);
      const erroMenssge = error.response.data.message;
      console.log(erroMenssge);
      if (erroMenssge === "User not found") {
        toast.error("Usuário não encontrado", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else{
        toast.error("Algo deu errado 😅", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  return (
    <div className="mainForm">
      {passwordRecoveryOn ? (
        <FormLoginStyled onSubmit={(e) => handleRecoverPassword(e)}>
          <h2>Recuperar Senha</h2>
          <div className="containerInputs">
            <div className="Inputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digitar email"
                required={true}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="buttonsLogin">
            <ButtonStandard
              bg="--brand1"
              color="--Grey-10"
              colorBorder="--brand1"
              HoverColorBorder="--brand1"
            >
              Enviar
            </ButtonStandard>
            <ButtonStandard
              bg="--Grey-3"
              color="--Grey-10"
              colorBorder="--Grey-3"
              HoverColorBorder="--brand1"
              HoverBgBorder="--brand1"
              type="button"
              onClick={() => setPasswordRecoveryOn(!passwordRecoveryOn)}
            >
              Cancelar
            </ButtonStandard>
          </div>
        </FormLoginStyled>
      ) : (
        <FormLoginStyled onSubmit={handleSubmit(handleSubmitLogin)}>
          <h2>Login</h2>
          <div className="containerInputs">
            <div className="Inputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digitar email"
                {...register("email")}
              />
            </div>
            <div className="Inputs">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digitar senha"
                {...register("password")}
              />
            </div>
            <span onClick={() => setPasswordRecoveryOn(!passwordRecoveryOn)}>
              Esqueci minha senha
            </span>
          </div>
          <div className="buttonsLogin">
            <ButtonStandard
              bg="--brand1"
              color="--Grey-10"
              colorBorder="--brand1"
              HoverColorBorder="--brand1"
            >
              Entrar
            </ButtonStandard>
            <span>Ainda não possui conta?</span>
            <Link to="/register" className="toRegister">
              Cadastrar
            </Link>
          </div>
        </FormLoginStyled>
      )}
    </div>
  );
};
