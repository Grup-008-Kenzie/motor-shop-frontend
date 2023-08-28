import { HeaderStyled, MenuIcon } from "../../styles/Header";
import Logo from "../../assets/logo.svg";
import { ButtonStandard } from "../../styles/buttons";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/contextGlobal";

export const Header = () => {
  const { hamburgeropen, setHamburgerOpen, navigate } =
    useContext(GlobalContext);

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgeropen);
  };
  return (
    <HeaderStyled>
      <div className="Logo" onClick={() => navigate("/")}>
        <img src={Logo} alt="" />
      </div>
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
      <MenuIcon open={hamburgeropen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
        <span />
      </MenuIcon>
      {hamburgeropen ? (
        <nav className="navHamburger">
          <ul>
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
        </nav>
      ) : null}
    </HeaderStyled>
  );
};
