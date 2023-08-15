import { ListTest } from "./listTest";
import { CarsListStyle } from "./styled";

export const ListCars = () => {
  return (
    <CarsListStyle>
      {ListTest.map((cars: any) => {
        return (
          <li className="postCar">
            <img src={cars.imgCar} alt="" />
            <h3>{cars.name}</h3>
            <p>{cars.descripition}</p>
            <div className="infonsCar">
              <div className="CarInf">
                <span>{cars.km}</span>
                <span>{cars.year}</span>
              </div>
              <span>{cars.price}</span>
            </div>
          </li>
        );
      })}
    </CarsListStyle>
  );
};
