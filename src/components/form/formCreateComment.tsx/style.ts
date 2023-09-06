import { styled } from "styled-components";

export const CommentsFormStyle = styled.form`
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
  .container-userComment {
    width: 100%;
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
    .container-comment {
      width: 100%;
      .textarea {
        width: 100%;
        height: 300px;
        border: none;
        background-color: var(--Grey-6);
      }
    }
  }
`;

