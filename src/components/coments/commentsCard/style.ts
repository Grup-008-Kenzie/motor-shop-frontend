import { styled } from "styled-components";

export const CommentsComponentStyle = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  list-style: none;
  margin-bottom: 20px;
  gap: 20px;
  background-color: #ffffff;
  h5 {
    font-size: 20px;
    font-weight: 600;
    color: var(--Grey-0);
  }
  .container-eachComment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    .container-userComment {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      span {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--brand1);
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        align-items: center;
        justify-content: center;
        display: flex;
      }
      h5 {
        font-size: 14px;
        font-weight: 600;
        color: var(--Grey-0);
      }
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: var(--Grey-2);
      line-height: 24px;
    }
  }
`;
