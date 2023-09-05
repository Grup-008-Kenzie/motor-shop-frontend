import { Header } from "../../components/Header";

export const ProductPage = () => {
  return (
    <>
      <Header />
      <div>
        <img
          src="https://garagem360.com.br/wp-content/uploads/2023/06/Strada-fundo-branco.jpg"
          alt=""
        />
        <div>
          <h2>Car name</h2>
          <div>
            <div>
              <span>year</span>
              <span>km</span>
            </div>
            <div>
              <h5>price,0000</h5>
            </div>
          </div>
          <button>comprar</button>
        </div>
        <div>
          <h5>Descrição</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
        <div>
          <h5>Comentarios</h5>
          <ul>
            <li>
              <div>
                <span>IN</span>
                <h5>Nome </h5>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};
