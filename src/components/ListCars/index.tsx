import { useContext, useEffect, useState } from "react";
import { ListTest } from "./listTest";
import { CarsListStyle } from "./styled";
import { apiLocal } from "../../services/api";
import { GlobalContext } from "../../contexts/contextGlobal";

export const ListCars = () => {
  const {
    hamburgeropen,
    setHamburgerOpen,
    navigate,
    usrInf,
    modalUpdateOn,
    setUserInf,
    setModalUpdateOn,
  } = useContext(GlobalContext);
  const [listSave, setListSave] = useState([]);
  const allAnnouncements = async () => {
    try {
      const response = await apiLocal.get(`/announcements`);
      console.log(response.data);
      setListSave(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allAnnouncements();
  }, []);

  return (
    <CarsListStyle>
      {listSave.map((cars: any) => {
        return (
          <li className="postCar">
            <img src={cars.image.first_image} alt="" />
            <h3>{cars.model}</h3>
            <p>{cars.description}</p>
            <div
              className="userIfor"
              onClick={() => navigate(`/Profile/${usrInf.id}`)}
            >
              <div className="avatarUser">
                {cars.seller.name[0].toUpperCase()}
              </div>
              {cars.seller.name}
            </div>
            <div className="infonsCar">
              <div className="CarInf">
                <span>{cars.kilometer}</span>
                <span>{cars.year}</span>
              </div>
              <span>
                {parseFloat(cars.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </li>
        );
      })}
    </CarsListStyle>
  );
};
