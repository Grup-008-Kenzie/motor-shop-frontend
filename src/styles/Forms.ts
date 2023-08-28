import styled from "styled-components";

export const FormLoginStyled = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  background-color: var(--Grey-10);
  padding: 44px 48px;
  border-radius: 5px;
  width: 550px;
  max-width: 100%;
  gap: 32px;
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .containerInputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    .Inputs {
      display: flex;
      flex-direction: column;
      gap: 10px;
      label {
        font-size: 0.875rem;
        font-weight: 600;
        font-family: "Inter", sans-serif;
      }
      input {
        width: 100%;
        height: 48px;
        padding: 0px 16px;
        border: 2px solid var(--Grey-7);
        background-color: transparent;
        border-radius: 5px;
        outline: none;
      }
    }
    span {
      display: flex;
      width: 100%;
      justify-content: end;
      color: var(--Grey-2);
      font-size: 0.875rem;
      font-family: "Inter", sans-serif;
      font-weight: 500;
    }
  }
  .buttonsLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    button {
      width: 100%;
    }
    .toRegister {
      display: flex;
      text-decoration: none;
      padding: 12px 28px 12px 28px;
      border: 2px solid var(--Grey-4);
      width: 100%;
      justify-content: center;
      border-radius: 5px;
      color: var(--Grey-0);
      font-weight: 600;
      font-size: 1rem;
      transition: 0.5s;
    }
    .toRegister:hover {
      border: 2px solid var(--Grey-0);
    }
    span {
      color: var(--Grey-2);
      font-weight: 400;
      font-size: 0.875rem;
      font-family: "Inter", sans-serif;
    }
  }
  @media (max-width: 850px){
    width: 95%;
  }
`;

export const FormRegisterStyled = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: var(--Grey-10);
  padding: 44px 48px;
  border-radius: 5px;
  width: 550px;
  max-width: 100%;
  gap: 32px;
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  span {
    font-size: 0.875rem;
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }
  .containerInputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    .twoInputs {
      display: flex;
      gap: 40px;
    }
    .Inputs {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .error {
        color: #e60000;
        font-weight: 400;
        font-size: 0.75rem;
        margin-top: 5px;
      }
      label {
        font-size: 0.875rem;
        font-weight: 600;
        font-family: "Inter", sans-serif;
        margin-bottom: 10px;
      }
      input {
        width: 100%;
        height: 48px;
        padding: 0px 16px;
        border: 2px solid var(--Grey-7);
        background-color: transparent;
        border-radius: 5px;
      }
    }
    textarea {
      width: 100%;
      height: 80px;
      resize: none;
      padding: 10px;
      border: 2px solid var(--Grey-7);
      border-radius: 5px;
      background-color: transparent;
      label {
        font-size: 0.875rem;
        font-weight: 600;
        font-family: "Inter", sans-serif;
      }
    }
    span {
      display: flex;
      width: 100%;
      justify-content: end;
      color: var(--Grey-2);
      font-size: 0.875rem;
      font-family: "Inter", sans-serif;
      font-weight: 500;
    }
    .erroCep {
      margin-top: 5px;
      color: var(--alert1);
    }
  }
  .buttonsLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    button {
      width: 100%;
    }
    .toRegister {
      display: flex;
      text-decoration: none;
      padding: 12px 28px 12px 28px;
      border: 2px solid var(--Grey-4);
      width: 100%;
      justify-content: center;
      border-radius: 5px;
      color: var(--Grey-0);
      font-weight: 600;
      font-size: 1rem;
      transition: 0.5s;
    }
    .toRegister:hover {
      border: 2px solid var(--Grey-0);
    }
    span {
      color: var(--Grey-2);
      font-weight: 400;
      font-size: 0.875rem;
      font-family: "Inter", sans-serif;
    }
  }
  @media (max-width: 850px){
    width: 95%;
  }
`;
