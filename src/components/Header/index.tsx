import { HeaderStyled, MenuIcon } from "../../styles/Header";
import Logo from "../../assets/logo.png";
import { ButtonStandard } from "../../styles/buttons";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/contextGlobal";

export const Header = () => {
  const { hamburgeropen, setHamburgerOpen } = useContext(GlobalContext);

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgeropen);
  };
  return (
    <HeaderStyled>
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="navMain">
        <ul>
          <li>
            <ButtonStandard
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
              >
                Fazer Login
              </ButtonStandard>
            </li>
            <li>
              <ButtonStandard
                bg="--Grey-10"
                color="--Grey-0"
                colorBorder="--Grey-4"
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
