import { FilterListStyle } from "./style";

interface IProps {
  title: string;
  list: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  filters: string[];
}

export const FilterList = ({ title, list, setFilters, filters }: IProps) => {
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
        {list.map((marca) => (
          <button
            key={marca}
            className={filters.includes(marca) ? "selected" : ""}
            onClick={() => {
              setFilterFunc(marca);
            }}
          >
            <li>{marca}</li>
          </button>
        ))}
      </ul>
    </FilterListStyle>
  );
};
