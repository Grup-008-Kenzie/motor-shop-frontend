import { styled } from "styled-components";

export const ModalEditeUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(150, 150, 150, 60%);
  display: flex;
  z-index: 5;

  .containerInputs::-webkit-scrollbar {
    display: none;
  }
  .cardForm {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 520px;
    max-width: 98%;
    height: 90%;
    max-height: max-content;
    background-color: var(--WhiteFixed);
    border-radius: 8px;
    padding: 24px;
    .headerModal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 1rem;
        font-weight: 600;
      }
      .buttonClose {
        font-size: 1.8rem;
        color: #adb5bd;
        cursor: pointer;
        font-weight: 500;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      height: 95%;
      position: relative;
      .containerInputs {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        height: 100%;
        max-height: 80%;
        overflow-y: scroll;
        h3 {
          font-size: 0.8rem;
          margin-top: 25px;
        }
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
    }
    .buttons{
      display: flex;
      justify-content: space-around;
      margin-top: 25px;
      height: 48px;
      
    }
  }
`;
