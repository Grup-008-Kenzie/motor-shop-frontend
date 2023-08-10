import { Carousel } from "react-responsive-carousel";
import { CarrouselStyled } from "../../styles/Carrousel";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";

export const CarrouselComponent = () => {
  return (
    <CarrouselStyled>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        useKeyboardArrows={false}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        <div className="imgCarousel">
          <h2>A melhor plataforma de anúncios de carros do país</h2>
          <img src={car1} alt="" />
        </div>
        <div className="imgCarousel">
          <h2>Encontre seu carro perfeito Ágora!</h2>
          <img src={car2} alt="" />
        </div>
        <div className="imgCarousel">
            <h2>Encontre o veículo ideal entre nossos anúncios selecionados.</h2>
          <img src={car3} alt="" />
        </div>
        <div className="imgCarousel">
            <h2>Explore e escolha seu próximo veículo.</h2>
          <img src={car4} alt="" />
        </div>
      </Carousel>
      <div className="teste" />
    </CarrouselStyled>
  );
};
