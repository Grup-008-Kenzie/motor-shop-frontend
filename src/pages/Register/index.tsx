import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { RegisterStyled } from "../../styles/Register"
import { FormRegister } from "./FormRegister"

export const Register = ()=>{
    return (
        <RegisterStyled>
            <Header/>
            <FormRegister/>
            <Footer/>
        </RegisterStyled>
    )

}