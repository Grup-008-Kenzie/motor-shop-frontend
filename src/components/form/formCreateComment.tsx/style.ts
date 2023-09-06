import { styled } from "styled-components";

export const CommentsFormStyle = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 20px;
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
  }

  .input {
    width: 90%;
    height: 150px;
    display: flex;
    flex-direction: row;
    border: 1.5px solid var(--Grey-7);
    background-color: #ffffff;

    textarea {
      padding: 15px;
      border: none;
      width: 100%;
      resize: none;
    }
    button {
      width: auto;
      height: 38px;
      margin-top:100px;
      margin-right: 10px;
      padding: 12px 20px;
      background-color: transparent;
      border: 2px solid var(--brand4);
      color: var(--brand1);
      border-radius: 4px;
      transition: all ease-in 0.2s;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
        background-color: var(--brand1);
        color: var(--brand4);
      }
  }
  .container-span{
    display: flex;
    flex-direction: row;
    gap: 10px;
    span{
      width: auto;
      height: auto;
      border-radius: 50%;
      padding:12px;
      background-color: var(--Grey-7);
      font-size: 12px;
      font-weight: 500;
      color:var(--Grey-3) ;
    }
  }

  `;
