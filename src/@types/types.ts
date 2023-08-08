import { Dispatch, SetStateAction } from "react";

export interface LoginData {
  email: string;
  password: string;
}

export interface ContexGlobalData {
  hamburgeropen: boolean;
  setHamburgerOpen: Dispatch<SetStateAction<boolean>>;
}
