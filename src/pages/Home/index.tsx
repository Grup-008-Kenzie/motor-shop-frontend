import { Header } from "../../components/Header";
import carro from "../../assets/testecarro.png";
import { HomeStyled } from "../../styles/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarrouselComponent } from "../../components/carrousel";
import { Footer } from "../../components/Footer";
import { FilterArea } from "../../components/filter";
import { useState } from "react";

export const HomePage = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const toogleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <HomeStyled>
      <Header />
      <CarrouselComponent />
      <FilterArea
        class_Name="filter-area-desktop"
        toogleShowFilter={toogleShowFilter}
        showFilter={showFilter}
      />
      {showFilter ? (
        <FilterArea
          class_Name="filter-area-mobile"
          toogleShowFilter={toogleShowFilter}
          showFilter={showFilter}
        />
      ) : null}

      {/* ================= componente da lista de veiculos ==================*/}

      {showFilter ? (
        <></>
      ) : (
        <button
          className="button-filter"
          onClick={() => {
            toogleShowFilter();
          }}
        >
          Filtros
        </button>
      )}

      <Footer />
    </HomeStyled>
  );
};
