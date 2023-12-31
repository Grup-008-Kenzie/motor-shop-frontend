import { styled } from "styled-components";

export const FilterAreaStyle = styled.div`
  height: auto;
  width: 450px;
  padding: 2rem;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .header-mobile-filter {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      background-color: transparent;
      font-size: 22px;
      cursor: pointer;
    }
  }
  .filter-x {
    display: none;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding-left: 20px;

    .header-mobile-filter {
      display: flex;
      justify-content: space-between;
    }

    .header-mobile-filter p {
      font-size: 16px;
      color: var(--Grey-1);
    }

    .header-mobile-filter button {
      font-size: 16px;
      color: var(--Grey-1);
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .button_clear {
      margin: 0 auto;
      width: 100%;
    }
  }

  .button_clear {
    padding: 12px;
    background-color: var(--brand1);
    font-size: 16px;
    color: var(--WhiteFixed);
    border: 2px solid var(--brand1);
    transition: all 0.3s;
    cursor: pointer;
  }

  .button_clear:hover {
    opacity: 0.8;
  }
`;
