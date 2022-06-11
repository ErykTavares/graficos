import React from "react";
import { CardStyle } from "./style";
import { ReactComponent as Help } from "../../assets/svg/help.svg";

const Card = ({ children, name }) => {
  return (
    <CardStyle>
      <h3>
        {name} <span>{<Help />}</span>
      </h3>
     <div>
        {children}
      </div> 
    </CardStyle>
  );
};

export default Card;
