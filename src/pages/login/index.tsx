import { useContext, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LoginStyled } from "../../styles/Login";
import { FormLogin } from "./FormLogin";
import { RegisterLoginContext } from "../../contexts/contexRegisterLogin";

export const LoginPage = () => {
  const { navigate }= useContext(RegisterLoginContext);

  const token = localStorage.getItem("MotorShopToken");


  useEffect(()=>{
    if (token) {
      navigate("/");
    }
  },[])
  return (
    <LoginStyled>
      <Header />
      <FormLogin />
      <Footer />
    </LoginStyled>
  );
};
