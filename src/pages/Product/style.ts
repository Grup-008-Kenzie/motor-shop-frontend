import { styled } from "styled-components";

export const ProductPageStyle = styled.div`
  background-color: var(--Grey-7);
  .subheader-blue {
    width: 100%;
    height: 500px;
    background-color: var(--brand1);
  }

  .container-main {
    width: 100%;
    height: auto;

    margin: auto;
    position: relative;
    top: -450px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 50px 100px;

    .container-product {
      width: 60%;
      height: auto;

      img {
        width: 100%;
        height: 300px;
        margin-bottom: 20px;
        background-color: #ffffff;
        border-radius: 4px;
      }
      .container-infos {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 20px;
        gap: 20px;
        background-color: #ffffff;
        border-radius: 4px;
        h2 {
          font-size: 20px;
          font-weight: 600;
          color: var(--Grey-0);
        }

        span {
          padding: 4px 8px;
          margin-right: 15px;
          background-color: var(--brand4);
          font-size: 14px;
          font-weight: 500;
          color: var(--brand1);
        }
        h5 {
          margin-top: 15px;
          font-size: 16px;
          font-weight: 500;
          color: var(--Grey-0);
        }
      }
      button {
        padding: 12px 22px;
        background-color: transparent;
        border: 2px solid var(--brand4);
        color: var(--brand1);
        border-radius: 4px;
        transition: all ease-in 0.2s;
        font-size: 16px;
        cursor: pointer;
      }

      button:hover {
        background-color: var(--brand1);
        color: var(--brand4);
      }
    }
    .container-description {
      width: 100%;
      height: auto;
      padding: 15px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;
      background-color: #ffffff;
      border-radius: 4px;

      h5 {
        font-size: 20px;
        font-weight: 600;
        color: var(--Grey-0);
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        color: var(--Grey-2);
      }
    }

    .container-aside {
      width: 35%;
      height: auto;
    }
    .container-comments {
      width: 60%;
    }
    @media (max-width: 800px) {
      .container-product {
        min-width: 90%;
      }
      .container-description {
        min-width: 100%;
      }
      .container-aside {
        min-width: 90%;
      }
      .container-comments {
        min-width: 90%;
      }
    }
  }

  @media (max-width: 800px) {
    .container-main {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 10px;
    }
  }
`;
