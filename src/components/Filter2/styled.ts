import { styled } from "styled-components";

export const FiltroStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  max-width: 100%;
  gap: 32px;
  padding-top: 50px;
  padding-left: 30px;
  div {
    width: 100%;
    .closeFilter {
      display: none;
      justify-content: space-between;
      span {
        cursor: pointer;
        font-weight: 600;
      }
    }
    h3 {
      color: var(--Grey-0);
      font-weight: 600;
      font-size: 1.75rem;
      font-family: "Lexend", sans-serif;
      margin-bottom: 20px;
    }
    .displayFilter {
      display: flex;
      width: 80%;
      justify-content: space-between;
      font-family: "Lexend", sans-serif;
      font-weight: 600;
      font-size: 1rem;
      color: var(--Grey-3);
      margin-bottom: 20px;
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;
      li {
        width: 100%;
        font-family: "Lexend", sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        color: var(--Grey-3);
        cursor: pointer;
        padding-left: 10px;
      }
      .Selected {
        color: var(--Grey-0);
      }
      li:hover {
        color: var(--Grey-1);
      }
    }
  }
  .buttonsFilter {
    width: 80%;

    button {
      width: 100%;
    }
  }
  @media (max-width: 850px) {
    display: flex;
    width: 93%;
    div {
      .closeFilter {
        display: flex;
      }
    }
    .buttonsFilter{
      width: 100%;
      button{
        width: 100%;
      }
    }
  }
`;
