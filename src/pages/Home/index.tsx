import { Header } from "../../components/Header";
import carro from "../../assets/testecarro.png";
import { HomeStyled } from "../../styles/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CarrouselComponent } from "../../components/carrousel";

export const HomePage = () => {


  return (
    <HomeStyled>
      <Header />
      <CarrouselComponent/>
    </HomeStyled>
  );
};
