import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ListTest } from "../../components/ListCars/listTest";
import { CommentsComponent } from "../../components/coments";
import { ProductPageStyle } from "./style";
import { Footer } from "../../components/Footer";
import { AnnouncementPhotosList } from "../../components/annoucementPhotosList";
import { AnnouncerInfo } from "../../components/announcerInfo";
import { CreateCommentForm } from "../../components/form/formCreateComment.tsx";

export const ProductPage = () => {
  const [annoucementInfo, setAnnoucementInfo] = useState<any>([]);

  useEffect(() => {
    // const getAnnoucement = () => {
    //   ListTest.map((car: any) => {

    //     return ;
    //   });
    // };

    setAnnoucementInfo(ListTest[0]);
  }, []);

  return (
    <ProductPageStyle>
      <Header />
      <div className="subheader-blue"></div>
      <div className="container-main">
        <div className="container-product">
          <img src={annoucementInfo.imgCar} alt="" />
          <div className="container-infos">
            <h2>{annoucementInfo.name}</h2>
            <div>
              <div>
                <span>{annoucementInfo.year}</span>
                <span>{annoucementInfo.km}</span>
              </div>
              <div>
                <h5>{annoucementInfo.price}</h5>
              </div>
            </div>
            <button>comprar</button>
          </div>
          <div className="container-description">
            <h5>Descrição</h5>
            <p>{annoucementInfo.descripition}</p>
          </div>
        </div>
        <div className="container-aside">
          <AnnouncementPhotosList />
          <AnnouncerInfo />
        </div>
        <div className="container-comments">
          <CommentsComponent />
          <CreateCommentForm />
        </div>
      </div>
      <Footer />
    </ProductPageStyle>
  );
};
