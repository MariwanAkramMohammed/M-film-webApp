import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ShowSelector } from "../../Redux/NavReduce/NavSelector";
import { NavAction } from "../../Redux/NavReduce/NavAction";
import MenuList2 from "../MenuList2/Menulist2";
const Header = ({ Show, dispatch }) => {
  return (
    <ContainerDiv>
      <Div>
        <Link_To to="/">
          <img src="/imgs/favicon2.png" className="logo" />
        </Link_To>
        <NavDiv>
          <Link_To to="/sign">Sign in</Link_To>
          <Menu onClick={() => dispatch(NavAction())}>
            <LinearScaleOutlinedIcon
              className="icon"
              style={{ fill: "white", fontSize: 40 }}
            />
          </Menu>
        </NavDiv>
      </Div>
      <MenuList2 />
    </ContainerDiv>
  );
};

const MapstateToProps = createStructuredSelector({
  Show: ShowSelector,
});
export default connect(MapstateToProps)(Header);

const Menu = styled.div`
  cursor: pointer;
  // margin-left: auto;
  padding: 10px;
`;

const ContainerDiv = styled.div`
  z-index: 13;
  width: 100vw;
  min-height: 62px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 0 20px;

  .logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .icon {
    cursor: pointer;
  }
`;

const Div = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;

  width: 100%;
  background-image: linear-gradient(to right, black, rgb(30, 42, 55));

  min-height: 62px;

  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 0 20px;

  .logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .icon {
    cursor: pointer;
  }
`;
const Link_To = styled(Link)`
text-decoration: none;
color:white;
text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavDiv = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap:20px;

  width: 30%;
  margin: 0 10px;
`;
