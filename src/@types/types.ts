import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export interface LoginData {
  email: string;
  password: string;
}

export interface ContexGlobalData {
  hamburgeropen: boolean;
  setHamburgerOpen: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
}