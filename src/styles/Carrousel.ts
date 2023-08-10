import styled from "styled-components";

export const CarrouselStyled = styled.div`
  width: 100%;
  position: relative;
  .teste {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.07326680672268904) 24%,
      rgba(0, 0, 0, 1) 100%
    );
    top: 0;
  }
  .imgCarousel {
    padding-top: 15px;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    h2 {
      font-size: 2rem;
      font-family: "Lexend", sans-serif;
      color: var(--Grey-2);
      transform: translate(150px, 0px);
      width: 30%;
    }
    img {
      width: 70%;
    }
  }
  @media (max-width: 850px) {
    .imgCarousel {
        height: 250px;
      h2 {
        display: none;
      }
      img{
        width: 100%;
      }
    }
  }
`;
