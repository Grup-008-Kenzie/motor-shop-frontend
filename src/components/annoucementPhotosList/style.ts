import { styled } from "styled-components";

export const AnnouncementPhotosStyle = styled.div`
  .container-photos {
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 15px;
    list-style:none;
    margin-bottom: 20px;
    overflow-y: scroll;
  }
  .container-img {
    width: 90px;
    height: 90px;
    margin: 10px;
    background-color: var(--Grey-7);
    text-decoration: none;
  }
`;
