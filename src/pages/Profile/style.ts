import { styled } from "styled-components";

export const ProfilePageStyle = styled.div`
  background-color: var(--Grey-7);
  .subheader-blue {
    width: 100%;
    height: 300px;
    background-color: var(--brand1);
  }

  .container-profile {
    width: 70%;
    height: auto;
    background-color: #ffffff;
    margin: 0 auto;
    transform: translateY(-200px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 50px;
    gap: 1.6rem;
    border-radius: 4px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .info-profile {
    display: flex;
    gap: 1rem;
    align-items: center;

    h3 {
      font-size: 28px;
    }

    p {
      background-color: var(--Grey-7);
      font-size: 16px;

      padding: 6px;
      color: var(--brand1);
      border-radius: 4px;
    }
  }

  p {
    font-size: 18px;
    color: var(--Grey-2);
  }

  button {
    padding: 12px 22px;
    background-color: transparent;
    border: 2px solid var(--brand1);
    color: var(--brand1);
    border-radius: 4px;
    transition: all ease-in 0.2s;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--brand1);
    color: #ffffff;
  }

  @media (max-width: 800px) {
    .container-profile {
      width: 90%;
    }

    .info-profile h3 {
      font-size: 20px;
    }
    .info-profile p {
      font-size: 16px;
    }
  }
`;
