import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  list-style: none;
  border-bottom: 2px solid var(--Grey-6);
  padding: 0px 60px;
  background-color: var(--Grey-10);
  position: relative;
  .profileUser:hover .navUser {
    display: flex;
  }
  .profileUser {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 15px;
    height: 100%;
    border-left: 2px solid var(--Grey-6);
    padding-left: 25px;
    padding-right: 15px;
    position: relative;
    span {
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      font-weight: 500;
    }
    .avatarUser {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: var(--brand1);
      border-radius: 50%;
      font-family: "Inter", sans-serif;
      font-weight: 700;
      color: var(--WhiteFixed);
    }
    .navUser {
      display: none;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 70px;
      background-color: var(--Grey-10);
      z-index: 2;
      border-radius: 2px;
      box-shadow: 0px 0px 57px -28px rgba(0, 0, 0, 0.32);
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        min-width: 170px;
      }
      li {
        cursor: pointer;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        color: var(--Grey-2);
        border-bottom: 2px solid transparent;
        transition: 0.5s;
      }
      li:hover {
        border-bottom: 2px solid var(--Grey-2);
      }
    }
  }
  .profileUserMobile {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 15px;
    height: 100%;
    flex-direction: column;
    span {
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      font-weight: 500;
    }
    .avatarUser {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: var(--brand1);
      border-radius: 50%;
      font-family: "Inter", sans-serif;
      font-weight: 700;
      color: var(--WhiteFixed);
    }
    .navUser {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 60px;
      background-color: var(--Grey-10);
      z-index: 2;
      border-radius: 2px;
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        min-width: 170px;
      }
      li {
        cursor: pointer;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        color: var(--Grey-2);
        border-bottom: 2px solid transparent;
        transition: 0.5s;
      }
      li:hover {
        border-bottom: 2px solid var(--Grey-2);
      }
    }
  }
  .navMain {
    display: flex;
    align-items: center;
    height: 100%;
    border-left: 2px solid var(--Grey-6);
    padding-left: 15px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  .Logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    cursor: pointer;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  .navHamburger {
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 15px;
    flex-direction: column;
    background-color: var(--Grey-10);
    width: 100%;
    top: 80px;
    right: 0;
    z-index: 1;
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    ul {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 80%;
      button {
        width: 100%;
      }
    }
  }
  @media (max-width: 850px) {
    padding: 0px 20px;
    .profileUser {
      display: none;
    }
    .navMain {
      display: none;
    }
    .Logo {
      img {
        height: 80%;
      }
    }
    .navHamburger {
      display: flex;
    }
  }
`;

interface StyledHamburgerProps {
  open?: boolean;
}

export const MenuIcon = styled.div<StyledHamburgerProps>`
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: linear-gradient(100deg, var(--Grey-3) 0%, var(--Grey-0) 100%);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${(props) => (props.open ? "8px" : "0")};
      width: ${(props) => (props.open ? "0%" : "100%")};
      left: ${(props) => (props.open ? "50%" : null)};
    }

    &:nth-child(2) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : null)};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : null)};
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 8px;
    }

    &:nth-child(4) {
      top: ${(props) => (props.open ? "8px" : "16px")};
      width: ${(props) => (props.open ? "0%" : "100%")};
      left: ${(props) => (props.open ? "50%" : null)};
    }
  }
  @media (min-width: 850px) {
    display: none;
  }
`;
