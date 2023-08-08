import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ContexGlobalData } from "../@types/types";

export const GlobalContext = createContext<ContexGlobalData>(
  {} as ContexGlobalData
);

export const GlobalProvider = () => {
  const [hamburgeropen, setHamburgerOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ hamburgeropen, setHamburgerOpen }}>
      <Outlet />
    </GlobalContext.Provider>
  );
};
