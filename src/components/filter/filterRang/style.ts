import { styled } from "styled-components";

export const FilterRangeStyle = styled.div`
  @media (max-width: 500px) {
    input {
      width: 100%;
    }
  }
  h3 {
    font-size: 28px;
    text-transform: capitalize;
    color: var(--Grey-0);
  }

  input {
    margin: 1rem;
    width: 90%;
  }

  input[type="range"]::-webkit-slider-thumb {
    background-color: var(--random4);
    height: 3px;
  }

  input[type="range"]::-moz-range-thumb {
    background-color: var(--random4);
    height: 3px;
  }

  input[type="range"]::-ms-thumb {
    background-color: var(--random4);
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background-color: var(--random4);
    height: 3px;
  }

  input[type="range"]::-moz-range-track {
    background-color: var(--random4);
    height: 3px;
  }

  input[type="range"]::-ms-track {
    background-color: var(--random4);
    height: 3px;
  }

  .attr-range {
    color: var(--Grey-3);
    padding-left: 1rem;
    margin-top: 1rem;
  }
`;
