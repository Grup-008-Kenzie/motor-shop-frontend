import { useState, useEffect } from "react";
import { FormCreateAnnouncementStyle } from "./style";
import { useForm } from "react-hook-form";
import { apiCarsTable } from "../../../services/api";

interface IProps {
  ToggleShowModal: () => void;
}

interface IModel {
  brand: string;
  fuel: string;
  id: string;
  name: string;
  value: string;
  year: string;
}

export const FormCreateAnnouncement = ({ ToggleShowModal }: IProps) => {
  const brand = ["chevrolet", "bmw", "mercedes", "vw", "hyundai"];
  const [brands, setBrands] = useState<string[]>([]);
  const [model, setModel] = useState("chevrolet");
  const [modelPriceFibe, setModelPriceFibe] = useState<string>("");
  const [modelList, setModelList] = useState<IModel[]>([]);
  const [imageLinks, setImageLinks] = useState(["", ""]);
  const { register, handleSubmit } = useForm();

  console.log(modelPriceFibe);

  console.log(model);
  useEffect(() => {
    const BrandListing = async () => {
      const brandsList = await apiCarsTable.get("/cars");
      const brandsArray = Object.keys(brandsList.data);
      setBrands(brandsArray);
    };
    BrandListing();
  }, []);

  useEffect(() => {
    const ModelListing = async () => {
      const modelsListen = await apiCarsTable.get(`/cars?brand=${model}`);
      setModelList(modelsListen.data);
      console.log(modelsListen.data);
    };
    ModelListing();
  }, [model]);

  const submit = (data: any) => {
    console.log(data);
    ToggleShowModal();
  };

  const toggleModel = (event: any) => {
    setModel(event.target.value);
  };

  const addImageInput = () => {
    setImageLinks([...imageLinks, ""]);
  };

  const togglePriceFibeModel = (event: any) => {
    const modelFibePrice = modelList.find(
      (model) => model.name === event.target.value
    );
    setModelPriceFibe(modelFibePrice!.value);
  };

  return (
    <FormCreateAnnouncementStyle onSubmit={handleSubmit(submit)}>
      <div className="input-container-select">
        <label htmlFor="brand">Marca</label>
        <select id="brand" {...register("brand")} onChange={toggleModel}>
          {brands.map((brand) => (
            <option value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <div className="input-container-select">
        <label htmlFor="model">Modelo</label>
        <select
          id="model"
          {...register("model")}
          onChange={togglePriceFibeModel}
        >
          {modelList.map((model) => (
            <option value={model.name}>{model.name}</option>
          ))}
        </select>
      </div>

      <div className="container-inputs-area">
        <div className="input-container">
          <label htmlFor="year">Ano</label>
          <input type="text" id="year" {...register("year")} />
        </div>
        <div className="input-container">
          <label htmlFor="combustivel">Combustivel</label>
          <select id="combustivel" {...register("combustivel")}>
            <option value="1">Eletrico</option>
            <option value="2">Flex</option>
            <option value="3">Hibrido</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="km">quilometragem</label>
          <input type="text" id="km" {...register("km")} />
        </div>
        <div className="input-container">
          <label htmlFor="color">cor</label>

          <select id="color" {...register("color")}>
            <option value="azul">Azul</option>
            <option value="branco">Branco</option>
            <option value="cinza">Cinza</option>
            <option value="prata">Prata</option>
            <option value="preto">Preto</option>
            <option value="vermelho">Vermelho</option>
            <option value="outras">Outras</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="pricefibe">Preço tabela FIPE</label>
          <input
            type="text"
            value={modelPriceFibe}
            id="pricefibe"
            readOnly
            {...register("pricefibe")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="price">Preço</label>
          <input type="text" id="price" {...register("price")} />
        </div>
      </div>

      <div className="desciption-container">
        <label htmlFor="desc">Descrição</label>
        <input type="text" id="desc" {...register("desc")} />
      </div>

      <div className="input-container-url-image">
        <label htmlFor="imgcover">Imagem da capa</label>
        <input type="text" id="imgcover" {...register("imgcover")} />
      </div>

      {imageLinks.map((link, index) => (
        <div className="input-container-url-image">
          <label htmlFor="first-image">{index + 1}° Imagem da galeria</label>
          <input type="text" id="first-image" {...register("first-image")} />
        </div>
      ))}

      <button
        type="button"
        className="button-add-input"
        onClick={() => addImageInput()}
      >
        Adicionar campo para imagem da galeria
      </button>
      <div className="button-container">
        <button className="cancel-button" onClick={() => ToggleShowModal()}>
          Cancelar
        </button>
        <button className="create-button" type="submit">
          Criar anúncio
        </button>
      </div>
    </FormCreateAnnouncementStyle>
  );
};
