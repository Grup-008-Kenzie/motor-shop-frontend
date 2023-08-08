import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 140px;
  background-color: var(--Grey-0);
  position: absolute;
  bottom: 0;
  margin-top: 140px;
  button {
    padding: 15px;
  }
  span {
    color: var(--Grey-10);
  }
  .Logo {
    img {
      height: 100px;
      max-width: 100%;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    height: 300px;
    .Logo {
      img {
        height: 80px;
        max-width: 100%;
      }
    }
  }
`;
