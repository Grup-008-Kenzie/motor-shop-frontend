import { styled } from "styled-components";

export const StyledCardProfile = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-bottom: 50px;

  .image-container {
    background-color: var(--Grey-7);
    position: relative;
  }

  .image-container p {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: var(--brand1);
    padding: 3px 8px;
    border-radius: 4px;
    color: #ffffff;
    text-transform: capitalize;
  }

  .image-container img {
    width: 100%;
  }
  .descript-container {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
  .descript-container h3 {
    color: var(--Grey-0);
    font-weight: bold;
  }
  .descript-container p {
    color: var(--Grey-3);
    font-size: 16px;
    font-weight: bold;
  }

  .infos-car {
    display: flex;
    justify-content: space-between;
  }
  .infos-car .priceYear-Car {
    display: flex;
    gap: 1.3rem;
  }
  .infos-car .priceYear-Car p {
    background-color: var(--brand4);
    color: var(--brand1);
    padding: 8px 16px;
    border-radius: 4px;
  }

  .button-container {
    display: flex;
    gap: 2rem;
  }
  .button-container button {
    border: 2px solid var(--Grey-0);
    color: var(--Grey-0);
  }

  .button-container button:hover {
    background-color: var(--Grey-0);
    color: #ffffff;
  }
`;
