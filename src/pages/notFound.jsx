import React from "react";
import NotFoundGif from "../assets/notFoud.gif";
import { NotFoundDiv } from "../styles/notfound";

export const NotFound = () => {
  return (
    <NotFoundDiv>
      <img src={NotFoundGif} alt="" />
    </NotFoundDiv>
  );
};
