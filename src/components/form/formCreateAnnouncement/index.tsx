import { useState, useEffect, useContext } from "react";
import { FormCreateAnnouncementStyle } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { apiCarsTable } from "../../../services/api";
import { IAnnoucementRequest } from "../../../@types/types";
import { GlobalContext } from "../../../contexts/contextGlobal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const [brands, setBrands] = useState<string[]>([]);
  const [model, setModel] = useState("chevrolet");
  const [modelPriceFibe, setModelPriceFibe] = useState<string>("");
  const [modelList, setModelList] = useState<IModel[]>([]);
  const [imageLinks, setImageLinks] = useState(["", ""]);

  const formSchema = yup.object().shape({
    year: yup.string().required("Ano Obrigatório"),
    fuel_type: yup.string().required("Combustivel Obrigatório"),
    kilometer: yup.string().required("kilometragem Obrigatório"),
    color: yup.string().required("Cor Obrigatório"),
    fipe_price: yup.string().required(""),
    price: yup.string().required("Valor Obrigatório"),
    description: yup.string().required("Descrição Obrigatório"),
    brand: yup.string().required("Marca Obrigatório"),
    model: yup.string().required("Modelo Obrigatório"),
    front_image: yup.string().required("Imagem da capa Obrigatório"),
    first_image: yup.string(),
    second_image: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    const BrandListing = async () => {
      const brandsList = await apiCarsTable.get("/cars");
      const brandsArray = Object.keys(brandsList.data);
      setBrands(brandsArray);
    };
    BrandListing();
  }, []);

  const { createAnnoucement } = useContext(GlobalContext);

  useEffect(() => {
    const ModelListing = async () => {
      const modelsListen = await apiCarsTable.get(`/cars?brand=${model}`);
      setModelList(modelsListen.data);
    };
    ModelListing();
  }, [model]);

  const submitCreateAnnoucement: SubmitHandler<any> = async (
    formData: IAnnoucementRequest
  ) => {
    console.log(formData);
    createAnnoucement(formData);
    return;
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
    <FormCreateAnnouncementStyle
      onSubmit={handleSubmit(submitCreateAnnoucement)}
    >
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
          <label htmlFor="fuel_type">Combustivel</label>
          <select id="fuel_type" {...register("fuel_type")}>
            <option value="1">Eletrico</option>
            <option value="2">Flex</option>
            <option value="3">Hibrido</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="kilometer">quilometragem</label>
          <input type="text" id="kilometer" {...register("kilometer")} />
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
            {...register("fipe_price")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="price">Preço</label>
          <input type="text" id="price" {...register("price")} />
        </div>
      </div>

      <div className="desciption-container">
        <label htmlFor="description">Descrição</label>
        <input type="text" id="description" {...register("description")} />
      </div>

      <div className="input-container-url-image">
        <label htmlFor="front_image">Imagem da capa</label>
        <input type="text" id="front_image" {...register("front_image")} />
      </div>

      {imageLinks.map((link, index) => (
        <div className="input-container-url-image">
          <label htmlFor="first-image">{index + 1}° Imagem da galeria</label>
          <input type="text" id="first-image" {...register("first_image")} />
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
