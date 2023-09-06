import { styled } from "styled-components";

export const AnnouncerInfoStyle = styled.div`
  width: 100%;
  height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;
  gap: 20px;

  span {
    width: 77px;
    height: 77px;
    border-radius: 50%;
    background-color: var(--brand1);
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  h5 {
    font-size: 20px;
    font-weight: 600;
    color: var(--Grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: var(--Grey-2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button{
    width: auto;
    height: 48px;
    padding: 12px 28px;
    border: 2px solid var(--Grey-0);
    border-radius: 4px;
    background-color: var(--Grey-0);
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
