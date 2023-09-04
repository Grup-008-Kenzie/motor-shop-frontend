import { HeaderStyled, MenuIcon } from "../../styles/Header";
import Logo from "../../assets/logo.svg";
import { ButtonStandard } from "../../styles/buttons";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/contextGlobal";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const {
    hamburgeropen,
    setHamburgerOpen,
    navigate,
    usrInf,
    modalUpdateOn,
    setUserInf,
    setModalUpdateOn,
  } = useContext(GlobalContext);


  const toggleMenu = () => {
    setHamburgerOpen(!hamburgeropen);
  };

  const location = useLocation();

  const getCurrentPage = () => {
    const { pathname } = location;
    switch (pathname) {
      case '/':
        return 'Home';
      case '/Login':
        return 'Login';
      case '/Register':
        return 'Register';
      case '/Profile':
        return 'Profile';
      // Adicione outros casos para outras páginas, se necessário
      default:
        return 'Unknown';
    }
  };

  const resultPage = getCurrentPage()
  return (
    <HeaderStyled>
      <div className="Logo" onClick={() => navigate("/")}>
        <img src={Logo} alt="" />
      </div>
      {usrInf === "" ? (
        <nav className="navMain">
          <ul>
            <li>
              <ButtonStandard
                onClick={() => navigate("/Login")}
                bg="--Grey-10"
                color="--Grey-2"
                colorBorder="--Grey-9"
                HoverColorBorder="--Grey-4"
              >
                Fazer Login
              </ButtonStandard>
            </li>
            <li>
              <ButtonStandard
                onClick={() => navigate("/Register")}
                bg="--Grey-10"
                color="--Grey-0"
                colorBorder="--Grey-4"
              >
                Cadastrar
              </ButtonStandard>
            </li>
          </ul>
        </nav>
      ) : (
        <div className="profileUser">
          <div className="avatarUser" onClick={() => navigate("/Profile")}>
            {usrInf.name[0].toUpperCase()}
          </div>
          <span>{usrInf.name}</span>
          <div className="navUser">
            <ul>
              {resultPage === "Profile"? <li onClick={() => navigate("/")}>Home</li>:<li onClick={() => navigate("/Profile")}>Meu Perfil</li>}
              <li onClick={() => setModalUpdateOn(!modalUpdateOn)}>
                Editar Perfil
              </li>
              <li>Editar endereço</li>
              <li
                onClick={() => {
                  localStorage.removeItem("MotorShopToken");
                  navigate("/");
                  setUserInf("");
                }}
              >
                Sair
              </li>
            </ul>
          </div>
        </div>
      )}
      <MenuIcon open={hamburgeropen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
        <span />
      </MenuIcon>
      {hamburgeropen ? (
        <nav className="navHamburger">
          {usrInf === "" ? (
            <ul>
              {" "}
              <li>
                <ButtonStandard
                  bg="--Grey-10"
                  color="--Grey-2"
                  colorBorder="--Grey-9"
                  HoverColorBorder="--Grey-4"
                  onClick={() => navigate("/Login")}
                >
                  Fazer Login
                </ButtonStandard>
              </li>
              <li>
                <ButtonStandard
                  bg="--Grey-10"
                  color="--Grey-0"
                  colorBorder="--Grey-4"
                  onClick={() => navigate("/Register")}
                >
                  Cadastrar
                </ButtonStandard>
              </li>
            </ul>
          ) : (
            <div className="profileUserMobile">
              <div className="avatarUser" onClick={() => navigate("/Profile")}>
                {usrInf.name[0].toUpperCase()}
              </div>
              <span>{usrInf.name}</span>
              <div className="navUser">
                <ul>
                  <li onClick={() => navigate("/Profile")}>Meu Perfil</li>
                  <li onClick={() => setModalUpdateOn(!modalUpdateOn)}>
                    Editar Perfil
                  </li>
                  <li>Editar endereço</li>
                  <li
                    onClick={() => {
                      localStorage.removeItem("MotorShopToken");
                      navigate("/");
                      setUserInf("");
                    }}
                  >
                    Sair
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      ) : null}
    </HeaderStyled>
  );
};
