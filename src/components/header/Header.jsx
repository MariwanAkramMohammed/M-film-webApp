import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ContainerDiv>
      <Link_Logo to="/">
        <img src="/imgs/favicon.png" className="logo" />
      </Link_Logo>
      <NavDiv>
        <p>Sign In</p>
        <p>Menue</p>
      </NavDiv>
    </ContainerDiv>
  );
};

export default Header;

const ContainerDiv = styled.div`
  z-index: 13;
  // margin-bottom:1rem;
  width: 100vw;
  background-image: linear-gradient(to right, black, rgb(2, 98, 2));
  opacity: 0.87;
  min-height: 62px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 0 20px;

  .logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
const Link_Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    padding: 0 10px;
    color: white;
  }
`;
