import { styled } from "styled-components";

export const CarsListStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;
  padding: 15px;
  list-style: none;
  width: 100%;
  padding-top: 50px;
  
  .postCar {
    display: flex;
    flex-direction: column;
    width: 320px;
    gap: 16px;
    img {
      width: 100%;
      background-color: var(--Grey-8);
    }
    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .infonsCar {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 1rem;
        font-weight: 600;
        font-family: "Lexend", sans-serif;
      }
      .CarInf {
        display: flex;
        gap: 10px;
        span {
          padding: 4px 8px 4px 8px;
          background-color: var(--brand4);
          color: var(--brand1);
          border-radius: 5px;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: "Inter", sans-serif;
        }
      }
    }
  }
`;
