import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ContexGlobalData } from "../@types/types";

export const GlobalContext = createContext<ContexGlobalData>(
  {} as ContexGlobalData
);

export const GlobalProvider = () => {
  const [hamburgeropen, setHamburgerOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <GlobalContext.Provider value={{ hamburgeropen, setHamburgerOpen,navigate }}>
      <Outlet />
    </GlobalContext.Provider>
  );
};
