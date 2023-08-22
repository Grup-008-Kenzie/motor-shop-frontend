import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ContexGlobalData } from "../@types/types";
import { apiCarsTable } from "../services/api";

export const GlobalContext = createContext<ContexGlobalData>(
  {} as ContexGlobalData
);

export const GlobalProvider = () => {
  const [hamburgeropen, setHamburgerOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  return (
    <GlobalContext.Provider
      value={{
        hamburgeropen,
        setHamburgerOpen,
        navigate,
        setLoading,
        loading
      }}
    >
      <Outlet />
    </GlobalContext.Provider>
  );
};
