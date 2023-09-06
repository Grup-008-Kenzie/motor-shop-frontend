import styled from "styled-components";

export const NotFoundDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--WhiteFixed);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
  @media (max-width: 850px) {
    img {
    width: 80%;
  }
  }
`;
