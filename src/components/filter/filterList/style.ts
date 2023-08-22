import { styled } from "styled-components";

export const FilterListStyle = styled.div`
  h3 {
    font-size: 28px;
    text-transform: capitalize;
    color: var(--Grey-0);
  }
  ul {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  li {
    color: var(--Grey-3);
    list-style: none;
    font-size: 20px;
    cursor: pointer;
    text-transform: capitalize;
    transition: all ease-in 0.2s;
  }
  .filterBrand{
    color: var(--Grey-0);
  }
  li:hover {
    color: var(--Grey-2);
  }

  button {
    width: 80%;
    background-color: transparent;
    border: none;
    text-align: left;
  }
`;
