import { FilterRangeStyle } from "./style";

interface IProps {
  name: string;
  min: string;
  max: string;
  setFiltersRage: React.Dispatch<React.SetStateAction<string>>;
  filterRange: string | undefined;
  attrprice: string;
  attrKm: string;
}

export const FilterRange = ({
  name,
  min,
  max,
  setFiltersRage,
  filterRange,
  attrprice,
  attrKm,
}: IProps) => {
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFiltersRage(value);
  };
  return (
    <FilterRangeStyle>
      <h3>{name}</h3>
      <p className="attr-range">
        {attrprice}
        {filterRange}
        {attrKm}
      </p>
      <input
        type="range"
        name={name}
        id={name}
        min={min}
        max={max}
        onChange={handleRangeChange}
      />
    </FilterRangeStyle>
  );
};
