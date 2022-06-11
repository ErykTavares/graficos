import React from "react";
import { TitleStyle } from "./style";

const Title = ({ title, subTitle }) => {
  return (
    <TitleStyle>
      {title}
      <span>{subTitle}</span>
    </TitleStyle>
  );
};

export default Title;
