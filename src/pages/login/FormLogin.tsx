import { Link } from "react-router-dom";
import { FormLoginStyled } from "../../styles/Forms";
import { ButtonStandard } from "../../styles/buttons";

export const FormLogin = () => {
  return (
    <FormLoginStyled>
      <h2>Login</h2>
      <div className="containerInputs">
        <div className="Inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digitar email" />
        </div>
        <div className="Inputs">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Digitar senha" />
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
