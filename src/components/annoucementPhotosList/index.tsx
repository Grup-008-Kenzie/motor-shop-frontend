import { ListTest } from "../ListCars/listTest";
import { AnnouncementPhotosStyle } from "./style";

export const AnnouncementPhotosList = () => {
  return (
    <AnnouncementPhotosStyle>
      <ul className="container-photos">
        {ListTest.map((car: any) => (
          <li className="container-img">
            <img src={car.carImg} alt="" />
          </li>
        ))}
      </ul>
    </AnnouncementPhotosStyle>
  );
};
