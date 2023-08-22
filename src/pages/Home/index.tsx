import { Header } from "../../components/Header";
import { HomeStyled } from "../../styles/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarrouselComponent } from "../../components/carrousel";
import { Footer } from "../../components/Footer";
import { ListCars } from "../../components/ListCars";
import { FilterList } from "../../components/Filter2";

export const HomePage = () => {
  return (
    <HomeStyled>
      <Header />
      <CarrouselComponent />
      <div className="contents">
        <FilterList/>
        <ListCars />
      </div>
      <Footer />
    </HomeStyled>
  );
};
