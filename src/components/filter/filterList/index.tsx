import { useContext } from "react";
import { FilterListStyle } from "./style";
import { GlobalContext } from "../../../contexts/contextGlobal";

interface IProps {
  title: string;
  list: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  filters: string[];
}

export const FilterList = ({ title, list, setFilters, filters }: IProps) => {
  const {} = useContext(GlobalContext);

  const setFilterFunc = (filterParams: string) => {
    if (filters.includes(filterParams)) {
      setFilters(filters.filter((filter) => filter !== filterParams));
    } else {
      setFilters([...filters, filterParams]);
    }
  };

  return (
    <FilterListStyle>
      <h3>{title}</h3>
      <ul>
        {/* {list.map((brand) => (
            <li
              key={brand}
              className={ brand === filterBrand? "filterBrand" : ""}
              onClick={() => {
                setFilterBrand(brand)
                console.log(filterBrand)
              }}
            >
              {brand}
            </li>
        ))} */}
      </ul>
    </FilterListStyle>
  );
};
