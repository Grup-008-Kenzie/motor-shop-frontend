import { useContext, useState } from "react";
import { FormRegisterStyled } from "../../styles/Forms";
import { ButtonStandard } from "../../styles/buttons";
import { apiCep } from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterLoginContext } from "../../contexts/contexRegisterLogin";
import { RegisterFormData } from "../../@types/types";

export const FormRegister = () => {
  const { handleSubmitRegister, loading , description, setDescription, complement, setComplement} = useContext(RegisterLoginContext);

  const [inputValueCep, setInputValueCep] = useState("");
  const [cepInfo, setCepInfo] = useState({
    bairro: null,
    cep: null,
    localidade: null,
    logradouro: null,
    uf: null,
  });
  const [errorCep, seterrorCep] = useState(false);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (/^\d{0,8}$/.test(value)) {
      setInputValueCep(value);
    }
    if (value.length === 8) {
      try {
        const response = await apiCep.get(`${value}/json/`);
        if (!response.data.erro) {
          setCepInfo(response.data);
          seterrorCep(false);
        } else {
          seterrorCep(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const numericKeys = /^[0-9]*$/;
    if (!event.key.match(numericKeys)) {
      event.preventDefault();
    }
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    birthdate: yup.string().required("O campo de data não pode ficar vazio"),
    cpf: yup.string().required("O CPF não pode ficar vazio"),
    phone_number: yup.string().required("O campo de Celular não pode ficar vazio"),
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

  const { register, handleSubmit, formState: { errors },} = useForm<RegisterFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormRegisterStyled onSubmit={handleSubmit(handleSubmitRegister)}>
      <h2>Cadastro</h2>
      <span>Infomações pessoais</span>
      <div className="containerInputs">
        <div className="Inputs">
          <label htmlFor="Name">Nome</label>
          <input
            type="text"
            id="Name"
            placeholder="Ex: Samuel Leão"
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
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
        </div>
        <div className="Inputs">
          <label htmlFor="CPF">CPF</label>
          <input
            type="text"
            id="CPF"
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
          <span className="error">{errors.cpf?.message}</span>
        </div>
        <div className="Inputs">
          <label htmlFor="telephone">Celular</label>
          <input
            type="tel"
            id="telephone"
            placeholder="(DDD) 90000-0000"
            {...register("phone_number")}
          />
          <span className="error">{errors.phone_number?.message}</span>
        </div>
        <div className="Inputs">
          <label htmlFor="birthdate">Data de nascimento</label>
          <input
            type="date"
            id="birthdate"
            placeholder="00/00/00"
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
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <span>Infomações de endereço</span>
      <div className="containerInputs">
        <div className="Inputs">
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            placeholder="00000.000"
            maxLength={8}
            {...register("cep")}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <span className="error">{errors.cep?.message}</span>
          {errorCep ? (
            <span className="erroCep">Cep Nao encontrado </span>
          ) : null}
        </div>
        <div className="twoInputs">
          <div className="Inputs">
            <label htmlFor="state">Estado</label>
            <input
              type="text"
              id="state"
              placeholder="Digitar Estado"
              value={cepInfo.uf === null ? "" : cepInfo.uf}
              {...register("state")}
            />
            <span className="error">{errors.state?.message}</span>
          </div>
          <div className="Inputs">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              placeholder="Digitar cidade"
              value={cepInfo.localidade === null ? "" : cepInfo.localidade}
              {...register("city")}
            />
            <span className="error">{errors.city?.message}</span>
          </div>
        </div>
        <div className="Inputs">
          <label htmlFor="street">Rua</label>
          <input
            type="text"
            id="street"
            placeholder="Digitar Nome da Rua"
            value={cepInfo.logradouro === null ? "" : cepInfo.logradouro}
            {...register("street")}
          />
          <span className="error">{errors.street?.message}</span>
        </div>
        <div className="twoInputs">
          <div className="Inputs">
            <label htmlFor="houseNumber">Número</label>
            <input
              type="text"
              id="houseNumber"
              placeholder="Digitar Número"
              {...register("number")}
            />
            <span className="error">{errors.number?.message}</span>
          </div>
          <div className="Inputs">
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              id="complement"
              placeholder="Ex: apart 307"
              onChange={(e) => setComplement(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="containerInputs">
        <div className="Inputs">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digitar senha"
            {...register("password")}
          />
          <span className="error">{errors.password?.message}</span>
        </div>
        <div className="Inputs">
          <label htmlFor="confirmPassword">Confimar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digitar senha"
            {...register("passwordConfirmation")}
          />
          <span className="error">{errors.passwordConfirmation?.message}</span>
        </div>
      </div>
      <ButtonStandard
        bg="--brand1"
        color="--Grey-10"
        colorBorder="--brand1"
        HoverColorBorder="--brand2"
        type="submit"
      >
        Finalizar cadastro
      </ButtonStandard>
    </FormRegisterStyled>
  );
};
