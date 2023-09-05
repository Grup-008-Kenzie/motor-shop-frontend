import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCarProfile } from "../../components/ListCarsProfile";
import { ModalCreateAnnouncement } from "../../components/modal/modalCreateAnnouncement";
import { useContext, useEffect, useState } from "react";
import { ProfilePageStyle } from "./style";
import { GlobalContext } from "../../contexts/contextGlobal";
import {
  ModalDeleteUser,
  ModalUpdateUser,
} from "../../components/modal/modalEditUser";
import { useParams } from "react-router-dom";
import { apiLocal } from "../../services/api";
import NotFoundGif from "../../assets/notFoud.gif";

export const ProfilePage = () => {
  const { navigate, modalDeleteOn, usrInf, modalUpdateOn, setModalUpdateOn } =
    useContext(GlobalContext);
  const token = localStorage.getItem("MotorShopToken");
  const [userProfile, setUserProfile] = useState<any>("");

  const { userId } = useParams();

  modalUpdateOn
    ? document.body.classList.add("modal-open")
    : document.body.classList.remove("modal-open");

  const userInfo = async () => {
    try {
      const response = await apiLocal.get(`/user/${userId}`);
      setUserProfile(response.data);
    } catch (error) {
      console.log(error);
      setUserProfile("");
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  const [showModalCreateAnnoucement, setShowModalCreateAnnoucement] =
    useState<boolean>(false);

  const ToggleShowModal = () => {
    setShowModalCreateAnnoucement(!showModalCreateAnnoucement);
  };

  showModalCreateAnnoucement
    ? document.body.classList.add("modal-open")
    : document.body.classList.remove("modal-open");


  return (
    <ProfilePageStyle>
      {modalUpdateOn ? <ModalUpdateUser /> : null}
      {modalDeleteOn ? <ModalDeleteUser /> : null}
      <Header />
      {userProfile === "" ? (
        <div className="notUser">
          <h2>Usuário não encontrado</h2>
          <img src={NotFoundGif} alt="" />
        </div>
      ) : (
        <div>
          <div className="subheader-blue"></div>
          <div className="container-profile">
            <div className="avatarUser">
              {userId === usrInf.id ? (
                <span onClick={() => setModalUpdateOn(!modalUpdateOn)}>
                  Editar perfil
                </span>
              ) : null}
              {userProfile === "" ? "" : userProfile.name[0].toUpperCase()}
            </div>
            <div className="info-profile">
              <h3>{userProfile === "" ? "" : userProfile.name}</h3>
              <p>Anunciante</p>
            </div>
            <p>{userProfile === "" ? "" : userProfile.description}</p>
            {userId === usrInf.id ? (
              <button onClick={() => ToggleShowModal()}>Criar anuncio</button>
            ) : null}
          </div>

          <ListCarProfile />
          {showModalCreateAnnoucement ? (
            <ModalCreateAnnouncement ToggleShowModal={ToggleShowModal} />
          ) : null}
        </div>
      )}

      <Footer />
    </ProfilePageStyle>
  );
};
