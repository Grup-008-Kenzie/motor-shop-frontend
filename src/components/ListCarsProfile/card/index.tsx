import { StyledCardProfile } from "./style";

export const CardProfile = () => {
  return (
    <StyledCardProfile>
      <div className="image-container">
        <p>ativo</p>
        <img
          src="https://garagem360.com.br/wp-content/uploads/2023/06/Strada-fundo-branco.jpg"
          alt=""
        />
      </div>
      <div className="descript-container">
        <h3>mercedes-bens</h3>
        <p>
          descrip Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque perspiciatis praesentium corrupti id placeat iste
          laboriosam facere veniam exercitationem.
        </p>
        <div className="infos-car">
          <div className="priceYear-Car">
            <p>0km</p>
            <p>2019</p>
          </div>
          <span>R$00.000,00</span>
        </div>
        <div className="button-container">
          <button>editar</button>
          <button>ver detalhes</button>
        </div>
      </div>
    </StyledCardProfile>
  );
};
