import { useContext, useEffect, useState } from "react";
import * as React from "react";
import { FiltroStyled } from "./styled";
import { GlobalContext } from "../../contexts/contextGlobal";
import { apiCarsTable } from "../../services/api";
import loadingImg from "../../assets/Pulse-1s-200px (2).gif";
import {
  Slider,
  Handles,
  Tracks,
  SliderItem,
  GetHandleProps,
  GetTrackProps,
  Rail,
} from "react-compound-slider";
import { ButtonStandard } from "../../styles/buttons";

const listBrand = [
  "chevrolet",
  "citroën",
  "fiat",
  "ford",
  "honda",
  "hyundai",
  "nissan",
  "peugeot",
  "renault",
  "toyota",
  "volkswagen",
];
const listColor = [
  "Azul",
  "Branca",
  "Cinza",
  "Prata",
  "Preta",
  "Vermelho",
  "Outras",
];

interface IHandleProps {
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
}
interface ITrackProps {
  source: SliderItem;
  target: SliderItem;
  getTrackProps: GetTrackProps;
}

const Handle: React.FC<IHandleProps> = ({ domain, handle, getHandleProps }) => {
  const percent = ((handle.value - domain[0]) / (domain[1] - domain[0])) * 100;

  return (
    <div
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: 0,
        marginTop: 27,
        zIndex: 2,
        width: 18,
        height: 18,
        border: 0,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "#22a7f9",
        color: "#333",
      }}
      {...getHandleProps(handle.id)}
    >
      <div style={{ fontFamily: "Roboto", fontSize: 11, marginTop: -35 }}>
        {handle.value}
      </div>
    </div>
  );
};

const Track: React.FC<ITrackProps> = ({ source, target, getTrackProps }) => {
  return (
    <div
      style={{
        position: "absolute",
        height: 3,
        zIndex: 1,
        marginTop: 35,
        backgroundColor: "#22a7f9",
        borderRadius: 5,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  );
};

export const FilterList = () => {
  const { setLoading, loading } = useContext(GlobalContext);
  const [filterBrand, setFilterBrand] = useState<string>("");
  const [filterModels, setFilterModels] = useState("");
  const [saveAllModels, setSaveAllModels] = useState<any>({});
  const [models, setModels] = useState<any>([
    { name: "civic" },
    { name: "Corola" },
    { name: "Cruze" },
    { name: "Fit" },
    { name: "Gol" },
    { name: "Ka" },
    { name: "Onix" },
    { name: "Porsche" },
  ]);
  const [displayedModels, setDisplayedModels] = useState<string[]>([]);
  const [filterKm, setFilterKm] = useState<any>([0, 500000]);
  const [filterPrice, setFilterPrice] = useState<any>([5, 999]);
  const [showFilters, setShowFilters] = useState(true); // Estado para controlar a exibição dos filtros

  useEffect(() => {
    const handleResize = () => {
      setShowFilters(window.innerWidth > 850); // Mostrar filtros somente em telas maiores que 850px
    };

    handleResize(); // Verificar o tamanho inicial
    window.addEventListener("resize", handleResize); // Adicionar ouvinte de evento para redimensionamento

    return () => {
      window.removeEventListener("resize", handleResize); // Limpar ouvinte de evento ao desmontar
    };
  }, []);

  useEffect(() => {
    const ModelListing = async () => {
      try {
        setLoading(true);
        const moddels = await apiCarsTable.get(`/cars`);
        setSaveAllModels(moddels.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    ModelListing();
  }, []);

  useEffect(() => {
    if (saveAllModels) {
      if (filterBrand !== "") {
        const uniqueModels = saveAllModels[filterBrand].reduce(
          (unique: any[], car: any) => {
            const carName = car.name;
            if (!unique.some((uniqueCar: any) => uniqueCar.name === carName)) {
              unique.push(car);
            }
            return unique;
          },
          []
        );
        setModels(uniqueModels);
      }
    }
  }, [filterBrand]);

  useEffect(() => {
    const newDisplayedModels: string[] = [];

    models.forEach((model: any) => {
      const modelName = model.name.split(" ")[0];
      if (!newDisplayedModels.includes(modelName)) {
        newDisplayedModels.push(modelName);
      }
    });

    setDisplayedModels(newDisplayedModels);
  }, [models]);

  useEffect(() => {
  }, [displayedModels]);

  // FILTROS

  const sliderStyle: any = {
    position: "relative",
    width: "65%",
    marginLeft: 10,
    height: 80,
  };

  const railStyle: any = {
    position: "absolute",
    width: "100%",
    height: 3,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: "#8B9CB6",
  };

  let kmDisplay = "km";
  if (filterKm[1] > 499999) {
    kmDisplay = "km +";
  }
  let priceDisplay = "mil";
  if (filterPrice[1] > 998) {
    priceDisplay = "mil +";
  }
  return (
    <FiltroStyled>
      {!showFilters && (
        <ButtonStandard
          bg="--brand1"
          color="--Grey-10"
          colorBorder="--brand1"
          HoverColorBorder="--brand2"
          onClick={() => setShowFilters(true)}
        >
          Filtro
        </ButtonStandard>
      )}
      {showFilters && (
        <div>
          <div className="closeFilter">
            <h3>Filtro</h3>
            <span onClick={() => setShowFilters(false)}>X</span>
          </div>
          <div>
            <h3>Marca</h3>
            <ul>
              {loading ? (
                <img src={loadingImg} width={"20%"} alt="" />
              ) : (
                listBrand.map((brand) => {
                  return (
                    <li
                      key={brand}
                      onClick={() => setFilterBrand(brand)}
                      className={filterBrand === brand ? "Selected" : ""}
                    >
                      {brand}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <div>
            <h3>Modelo</h3>
            <ul>
              {displayedModels.map((model: any) => {
                return (
                  <li
                    key={model}
                    onClick={() => setFilterModels(model)}
                    className={filterModels === model ? "Selected" : ""}
                  >
                    {model}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>Cor</h3>
            <ul>
              {listColor.map((cor) => {
                return <li key={cor}>{cor}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Ano</h3>
            <ul>
              <li>2022</li>
              <li>2021</li>
              <li>2018</li>
              <li>2015</li>
              <li>2013</li>
              <li>2012</li>
              <li>2010</li>
            </ul>
          </div>
          <div>
            <h3>Combustivel</h3>
            <ul>
              <li>Elétrico</li>
              <li>Flex</li>
              <li>Híbrido</li>
            </ul>
          </div>
          <div>
            <h3>Km</h3>
            <div className="displayFilter">
              <span>{filterKm[0].toLocaleString("pt-BR")}km</span>
              <span>
                {filterKm[1].toLocaleString("pt-BR")}
                {kmDisplay}
              </span>
            </div>
            <Slider
              rootStyle={sliderStyle}
              domain={[0, 500000]}
              step={1}
              mode={2}
              values={[0, 500000]}
              onChange={(newValues) => setFilterKm(newValues)}
            >
              <Rail>
                {({ getRailProps }) => (
                  <div style={railStyle} {...getRailProps()} />
                )}
              </Rail>
              <Handles>
                {({ handles, getHandleProps }) => (
                  <div className="slider-handles">
                    {handles.map((handle) => (
                      <Handle
                        key={handle.id}
                        domain={[0, 500000]}
                        handle={handle}
                        getHandleProps={getHandleProps}
                      />
                    ))}
                  </div>
                )}
              </Handles>
              <Tracks right={false}>
                {({ tracks, getTrackProps }) => (
                  <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                      <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                      />
                    ))}
                  </div>
                )}
              </Tracks>
            </Slider>
          </div>
          <div>
            <h3>Preço</h3>
            <div className="displayFilter">
              <span>R${filterPrice[0].toLocaleString("pt-BR")}Mil</span>
              <span>
                R${filterPrice[1].toLocaleString("pt-BR")}
                {priceDisplay}
              </span>
            </div>
            <Slider
              rootStyle={sliderStyle}
              domain={[5, 999]}
              step={1}
              mode={2}
              values={[5, 999]}
              onChange={(newValues) => setFilterPrice(newValues)}
            >
              <Rail>
                {({ getRailProps }) => (
                  <div style={railStyle} {...getRailProps()} />
                )}
              </Rail>
              <Handles>
                {({ handles, getHandleProps }) => (
                  <div className="slider-handles">
                    {handles.map((handle) => (
                      <Handle
                        key={handle.id}
                        domain={[5, 999]}
                        handle={handle}
                        getHandleProps={getHandleProps}
                      />
                    ))}
                  </div>
                )}
              </Handles>
              <Tracks right={false}>
                {({ tracks, getTrackProps }) => (
                  <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                      <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                      />
                    ))}
                  </div>
                )}
              </Tracks>
            </Slider>
          </div>
          <div className="buttonsFilter">
            <ButtonStandard
              bg="--brand1"
              color="--Grey-10"
              colorBorder="--brand1"
              HoverColorBorder="--brand2"
            >
              Filtrar
            </ButtonStandard>
          </div>
        </div>
      )}
    </FiltroStyled>
  );
};
