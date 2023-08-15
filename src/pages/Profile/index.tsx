import { Header } from "../../components/Header";
import { ProfilePageStyle } from "./style";

export const ProfilePage = () => {
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
        <button>Criar anuncio</button>
      </div>
    </ProfilePageStyle>
  );
};
