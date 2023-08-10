import { FooterStyled } from "../../styles/Footer";
import Logo from "../../assets/logo2.png";
import { ButtonStandard } from "../../styles/buttons";
import angleUp from "../../assets/angleUp.svg";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <FooterStyled>
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>
      <span>© 2023 - Todos os direitos reservados.</span>
      <ButtonStandard
        bg="--Grey-2"
        color="--Grey-10"
        colorBorder="--Grey-2"
        HoverColorBorder="--Grey-1"
        onClick={scrollToTop}
      >
        <img src={angleUp} alt="" />
      </ButtonStandard>
    </FooterStyled>
  );
};
