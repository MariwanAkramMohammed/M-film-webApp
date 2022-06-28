import React from "react";
import styled from "styled-components";

const ItemButton = ({ children = "Watch Now" }) => {
  return <ButtonCont className="man" >{children}</ButtonCont>;
};
export default ItemButton;
const ButtonCont = styled.button`

  width: 85%;
  height: 30%;
  border-radius: 5px;
  
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 1s;

  opacity: 0.78;
  background-image: linear-gradient(
    to right,
    rgb(255, 143, 14),
    rgb(255, 94, 8),
    rgb(247, 63, 1)
  );
  &:hover {
    transform: scale(1.05);
    opacity:0.9;
  
    background-image: linear-gradient(
      to right,
      rgb(255, 171, 14),
      rgb(255, 94, 8),
  
    );
  }
`;




