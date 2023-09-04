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
    .avatarUser:hover span {
      display: flex;
    }
    .avatarUser {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      background-color: var(--brand1);
      border-radius: 50%;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: var(--WhiteFixed);
      font-size: 2.2rem;
      position: relative;
      span {
        display: none;
        padding-top: 50px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.8rem;
        position: fixed;
        background-color: rgba(11, 13, 13, 0.3);
        width: 100px;
        height: 100px;
        transition: 1s;
        cursor: pointer;
      }
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
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
