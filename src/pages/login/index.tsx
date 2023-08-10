import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LoginStyled } from "../../styles/Login";
import { FormLogin } from "./FormLogin";

export const LoginPage = () => {
  return (
    <LoginStyled>
      <Header />
      <FormLogin />
      <Footer />
    </LoginStyled>
  );
};
