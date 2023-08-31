import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCarProfile } from "../../components/ListCarsProfile";
import { ModalCreateAnnouncement } from "../../components/modal/modalCreateAnnouncement";
import { useContext, useEffect, useState } from "react";
import { ProfilePageStyle } from "./style";
import { GlobalContext } from "../../contexts/contextGlobal";
import { ModalUpdateUser } from "../../components/modal/modalEditUser";

export const ProfilePage = () => {
  const { navigate, usrInf, modalUpdateOn, setModalUpdateOn } = useContext(GlobalContext);
  const token = localStorage.getItem("MotorShopToken");

  modalUpdateOn ? document.body.classList.add("modal-open"): document.body.classList.remove("modal-open");

  console.log(usrInf)
  useEffect(()=>{
    if(!token){
      navigate("/")
    }
  },[])

  const [showModalCreateAnnoucement, setShowModalCreateAnnoucement] =
    useState<boolean>(false);

  const ToggleShowModal = () => {
    setShowModalCreateAnnoucement(!showModalCreateAnnoucement);
  };

  return (
    <ProfilePageStyle>
      {modalUpdateOn? <ModalUpdateUser/>: null}
      <Header />
      <div className="subheader-blue"></div>
      <div className="container-profile">
        <div className="avatarUser">
          <span onClick={()=> setModalUpdateOn(!modalUpdateOn)}>Editar perfil</span>
          {usrInf === ""? "":usrInf.name[0].toUpperCase()}
          </div>
        <div className="info-profile">
          <h3>{usrInf === ""? "":usrInf.name}</h3>
          <p>Anunciante</p>
        </div>
        <p>{usrInf === ""? "":usrInf.description}</p>
        <button onClick={() => ToggleShowModal()}>Criar anuncio</button>
      </div>

      <ListCarProfile />
      {showModalCreateAnnoucement ? (
        <ModalCreateAnnouncement ToggleShowModal={ToggleShowModal} />
      ) : null}

      <Footer />
    </ProfilePageStyle>
  );
};
