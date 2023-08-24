import { Link } from "react-router-dom";
import { FormLoginStyled } from "../../styles/Forms";
import { ButtonStandard } from "../../styles/buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserFormData } from "../../@types/types";
import { useContext } from "react";
import { RegisterLoginContext } from "../../contexts/contexRegisterLogin";

export const FormLogin = () => {
  const { handleSubmitLogin, loading }: any = useContext(RegisterLoginContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
  });

  const { register, handleSubmit } = useForm<UserFormData>({
    resolver: yupResolver(formSchema),
  });
  return (
    <FormLoginStyled onSubmit={handleSubmit(handleSubmitLogin)}>
      <h2>Login</h2>
      <div className="containerInputs">
        <div className="Inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digitar email" {...register("email")}/>
        </div>
        <div className="Inputs">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Digitar senha" {...register("password")} />
        </div>
        <span>Esqueci minha senha</span>
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
  );
};
