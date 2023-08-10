import { useState } from "react";
import { FilterList } from "./filterList";
import { FilterRange } from "./filterRang";

import { FilterAreaStyle } from "./style";

const listMarca = ["bmw", "audi", "ferrari", "vw"];

export const FilterArea = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [filtersKm, setFiltersKm] = useState<string>("0");
  const [filtersPrice, setFiltersPrice] = useState<string>("0");

  const clearFilters = () => {
    setFilters([]);
    setFiltersKm("0");
    setFiltersPrice("0");
  };

  // console.log(filters);
  // console.log(filtersKm);
  // console.log(filtersPrice);

  return (
    <FilterAreaStyle className="filter-area Show-filter-area">
      <div className="header-mobile-filter filter-x">
        <p className="">filtros</p>
        <button>x</button>
      </div>
      <FilterList
        title="Marca"
        list={listMarca}
        setFilters={setFilters}
        filters={filters}
      />
      <FilterList
        title="Modelo"
        list={listMarca}
        setFilters={setFilters}
        filters={filters}
      />
      <FilterList
        title="cor"
        list={listMarca}
        setFilters={setFilters}
        filters={filters}
      />
      <FilterList
        title="ano"
        list={listMarca}
        setFilters={setFilters}
        filters={filters}
      />
      <FilterList
        title="Combustivel"
        list={listMarca}
        setFilters={setFilters}
        filters={filters}
      />
      <FilterRange
        name="km"
        min="0"
        max="300000"
        setFiltersRage={setFiltersKm}
        filterRange={filtersKm}
        attrprice=""
        attrKm=" KM"
      />
      <FilterRange
        name="Preço"
        min="10000"
        max="500000"
        setFiltersRage={setFiltersPrice}
        filterRange={filtersPrice}
        attrprice="R$ "
        attrKm=",00"
      />
      <button
        className="button_clear"
        type="button"
        onClick={() => clearFilters()}
      >
        Limpar filtros
      </button>
    </FilterAreaStyle>
  );
};
