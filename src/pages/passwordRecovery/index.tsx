import { yupResolver } from "@hookform/resolvers/yup";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FormLoginStyled } from "../../styles/Forms";
import { RecoverStyled } from "../../styles/PasswordRecover";
import { ButtonStandard } from "../../styles/buttons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PasswordRecoveryData } from "../../@types/types";
import { apiLocal } from "../../services/api";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { RegisterLoginContext } from "../../contexts/contexRegisterLogin";
import { useParams } from "react-router-dom";

export const PasswordRecovery = () => {
  const { loading, navigate } = useContext(RegisterLoginContext);

  const { tokenUser } = useParams();

  const formSchema = yup.object().shape({
    password: yup.string().required("Senha Obrigatório"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não correspondem")
      .required("Esses campos não pode ficar vaziosr"),
  });

  const handlePasswordRecovery: SubmitHandler<PasswordRecoveryData> = async (
    datas
  ) => {
    let newData: any = {
      password: datas.password,
    };
    try {
      const response = await apiLocal.patch(
        `/users/resetPassword/${tokenUser}`,
        newData
      );
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
        navigate("/Login");
    } catch (error: any) {
      console.log(error);
      toast.error("Algo deu errado 😅 ", {
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
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordRecoveryData>({
    resolver: yupResolver(formSchema),
  });
  return (
    <RecoverStyled>
      <Header />
      <div className="container">
        <FormLoginStyled onSubmit={handleSubmit(handlePasswordRecovery)}>
          <h2>Recuperar Senha</h2>
          <div className="containerInputs">
            <div className="Inputs">
              <label htmlFor="email">Nova Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digita sua Nova Senha "
                {...register("password")}
              />
            </div>
            <div className="Inputs">
              <label htmlFor="email">Confirme à senha</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirme à senha"
                {...register("passwordConfirmation")}
              />
              <span className="error">
                {errors.passwordConfirmation?.message}
              </span>
            </div>
          </div>
          <div className="buttonsLogin">
            <ButtonStandard
              bg="--brand1"
              color="--Grey-10"
              colorBorder="--brand1"
              HoverColorBorder="--brand1"
            >
              Nova Senha
            </ButtonStandard>
          </div>
        </FormLoginStyled>
      </div>
      <Footer />
    </RecoverStyled>
  );
};
