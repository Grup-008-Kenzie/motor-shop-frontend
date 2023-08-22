import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCarProfile } from "../../components/ListCarsProfile";
import { ModalCreateAnnouncement } from "../../components/modal/modalCreateAnnouncement";
import { useState } from "react";
import { ProfilePageStyle } from "./style";

export const ProfilePage = () => {
  const [showModalCreateAnnoucement, setShowModalCreateAnnoucement] =
    useState<boolean>(false);

  const ToggleShowModal = () => {
    setShowModalCreateAnnoucement(!showModalCreateAnnoucement);
  };

  return (
    <ProfilePageStyle>
      <Header />
      <div className="subheader-blue"></div>
      <div className="container-profile">
        <img
          src="https://ca.slack-edge.com/TQZR39SET-U03Q1QHRQ13-1162fb4ce9d3-512"
          alt=""
        />
        <div className="info-profile">
          <h3>Samuel Leão</h3>
          <p>Anunciante</p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
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
