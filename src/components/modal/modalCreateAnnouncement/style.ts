import { styled } from "styled-components";

export const ModalAnnouncementStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(150, 150, 150, 60%);
  display: flex;
  justify-content: center;
  overflow-y: scroll;

  align-items: flex-start;

  .modal-card {
    width: 520px;
    background-color: var(--WhiteFixed);
    border-radius: 8px;
    padding: 24px;
  }
  .header-modal-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
