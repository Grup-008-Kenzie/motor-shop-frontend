import { styled } from "styled-components";

export const FormCreateAnnouncementStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label {
    font-size: 18px;
    font-weight: bold;
  }

  .input-container-select {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  select {
    padding: 12px 6px;
    outline: none;
    border-radius: 4px;
    border: 1px solid var(--Grey-4);
    color: var(--Grey-4);
  }
  .container-inputs-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    width: 49%;
    gap: 0.6rem;
    margin-top: 10px;
  }
  .input-container input {
    padding: 12px 6px;
    outline: none;
    border-radius: 4px;
    border: 1px solid var(--Grey-4);
    color: var(--Grey-4);
  }
  .desciption-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .desciption-container input {
    height: 100px;
    outline: none;
    border-radius: 4px;
    border: 1px solid var(--Grey-4);
    color: var(--Grey-4);
    text-align: start;
    vertical-align: text-top;
  }

  .input-container-url-image {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    input {
      padding: 12px 6px;
      outline: none;
      border-radius: 4px;
      border: 1px solid var(--Grey-4);
      color: var(--Grey-4);
    }
  }
  .button-add-input {
    background-color: var(--brand4);
    border: 2px solid var(--brand4);
    width: 320px;
    padding: 3px 8px;
    text-align: left;
    padding:12px 20px 12px 20px;
    cursor: pointer;
    border-radius: 4px;
    color: var(--brand1);
    font-size: 0.875rem;
    font-weight: 600;
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    .cancel-button {
      padding: 12px 28px 12px 28px;
      background-color: var(--Grey-6);
      border: 2px solid var(--Grey-6);
      border-radius: 4px;
      color: var(--Grey-2);
      font-weight: bold;
      cursor: pointer;
    }

    .create-button {
      padding: 12px 28px 12px 28px;
      border-radius: 4px;
      background-color: var(--brand1);
      border: 2px solid var(--brand1);
      color: var(--WhiteFixed);
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
