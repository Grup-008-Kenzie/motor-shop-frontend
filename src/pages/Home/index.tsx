import { Header } from "../../components/Header";
import { HomeStyled } from "../../styles/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarrouselComponent } from "../../components/carrousel";
import { Footer } from "../../components/Footer";
import { ListCars } from "../../components/ListCars";
import { FilterList } from "../../components/Filter2";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/contextGlobal";
import jwt_decode from "jwt-decode";
import { ModalDeleteUser, ModalUpdateUser } from "../../components/modal/modalEditUser";

export const HomePage = () => {
  const { userInfo, usrInf,modalUpdateOn,modalDeleteOn } = useContext(GlobalContext);

  const token = localStorage.getItem("MotorShopToken");
  modalUpdateOn ? document.body.classList.add("modal-open"): document.body.classList.remove("modal-open");

  useEffect(() => {
    if(usrInf === ""){
      
      if (token) {
        var decoded: any = jwt_decode(token);
        userInfo(decoded.id);
      }
    }
  }, []);

  return (
    <HomeStyled>
      {modalUpdateOn? <ModalUpdateUser/>: null}
      {modalDeleteOn? <ModalDeleteUser/>: null}
      <Header />
      <CarrouselComponent />
      <div className="contents">
        <FilterList />
        <ListCars />
      </div>
      <Footer />
    </HomeStyled>
  );
};
