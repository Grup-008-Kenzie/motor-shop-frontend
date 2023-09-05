import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

export interface LoginData {
  email: string;
  password: string;
}

export interface ContexGlobalData {
  hamburgeropen: boolean;
  setHamburgerOpen: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  userInfo: any;
  usrInf: any;
  setUserInf: any;
  modalUpdateOn: boolean;
  setModalUpdateOn: Dispatch<SetStateAction<boolean>>;
  modalDeleteOn: boolean;
  setModalDeleteOn: Dispatch<SetStateAction<boolean>>;
  createAnnoucement: (FormData: IAnnoucementRequest) => Promise<void>;
}

export interface ContexRegisterLoginData {
  loading: boolean;
  handleSubmitLogin: SubmitHandler<UserFormData>;
  handleSubmitRegister: SubmitHandler<any>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  complement: string;
  setComplement: Dispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
}

export interface UserFormData {
  email: string;
  password: string;
}

export interface PasswordRecoveryData {
  password: string;
  passwordConfirmation: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  birthdate: string;
  cpf: string;
  phone_number: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  password: string;
  passwordConfirmation: string;
}

export interface UpdateFormData {
  name: string;
  email: string;
  birthdate: string;
  phone_number: string;
}

export interface IAnnoucementRequest {
  year: string;
  fuel_type: string;
  kilometer: string;
  color: string;
  fipe_price: string;
  price: string;
  description: string;
  brand: string;
  model: string;
  front_image: string;
  first_image?: string;
  second_image?: string;
}
