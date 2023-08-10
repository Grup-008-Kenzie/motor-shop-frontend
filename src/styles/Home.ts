import { styled } from "styled-components";

export const HomeStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .filter-area-desktop {
  }
  .filter-area-mobile {
    display: none;
  }
  .button-filter {
    display: none;
  }

  @media (max-width: 800px) {
    .button-filter {
      width: 420px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;

      background-color: var(--random4);
      font-size: 16px;
      color: var(--WhiteFixed);
      border: 2px solid var(--random4);
      transition: all 0.3s;
      cursor: pointer;
      margin: 0 auto;
    }
    .button-filter:hover {
      opacity: 0.8;
    }

    .filter-area-desktop {
      display: none;
    }

    .filter-area-mobile {
      width: 100%;
      display: flex;
      .filter-x {
        display: flex;
      }
    }
  }
`;
