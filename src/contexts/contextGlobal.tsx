import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ContexGlobalData } from "../@types/types";
import { apiCarsTable, apiLocal } from "../services/api";
import jwt_decode from "jwt-decode";

export const GlobalContext = createContext<ContexGlobalData>(
  {} as ContexGlobalData
);

export const GlobalProvider = () => {
  const [hamburgeropen, setHamburgerOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [usrInf, setUserInf] = useState<any>("");
  const [modalUpdateOn, setModalUpdateOn] = useState<boolean>(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("MotorShopToken");

  const headerApi = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const userInfo: any = async (idUser: string) => {
    try {
      console.log(idUser);
      const response = await apiLocal.get(`/user/${idUser}`);
      console.log(response.data);
      setUserInf(response.data);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("MotorShopToken");
      navigate("/");
      setUserInf("");
    }
  };

  useEffect(() => {
    if (token) {
      var decoded: any = jwt_decode(token);
      console.log(decoded.id);
      userInfo(decoded.id);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        hamburgeropen,
        setHamburgerOpen,
        navigate,
        setLoading,
        loading,
        userInfo,
        usrInf,
        setUserInf,
        modalUpdateOn,
        setModalUpdateOn,
      }}
    >
      <Outlet />
    </GlobalContext.Provider>
  );
};
