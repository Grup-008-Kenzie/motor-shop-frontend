import { styled } from "styled-components";

export const ModalAnnouncementStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(150, 150, 150, 60%);
  display: flex;
  justify-content: center;
  .modal-card {
    width: 520px;
    background-color: var(--WhiteFixed);
    border-radius: 8px;
    padding: 24px;
    max-height: 80%;
    overflow: scroll;
  }
  .header-modal-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  .button-close{
    cursor: pointer;
    background-color: transparent;
    color: var(--Grey-3);
    font-size: 1.3rem;
    font-weight: 500;
  }
  }
  .header-modal-card p {
    font-size: 16px;
    font-weight: bold;
    color: var(--gray0);
  }
  .header-modal-card button {
    border: none;
    font-size: 22px;
    color: var(--gray0);
  }
`;
