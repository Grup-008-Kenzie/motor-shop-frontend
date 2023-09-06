import styled from "styled-components";

export const RecoverStyled = styled.main`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    max-height: 100%;
    background-color: var(--Grey-8);
    .error{
        color: var(--alert1);
    }
  }
`;
