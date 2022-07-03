import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";
import { ShowCardAction } from "../../Redux/CrdReducer/CardAction";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ShowSelector } from "../../Redux/NavReduce/NavSelector";
import { NavAction } from "../../Redux/NavReduce/NavAction";
import MenuList2 from "../MenuList2/Menulist2";
import Acount from "../Acount/Acount";
import { CardSelector } from "../../Redux/CrdReducer/CardSelector";

const Header = ({ Show, MenuShow, dispatch }) => {
  // console.log(Show);
  return (
    <ContainerDiv>
      <Div>
        <Link_To to="/">
          <img src="/imgs/favicon2.png" className="logo" />
        </Link_To>
        <NavDiv>
          <LogDiv onClick={() => dispatch(ShowCardAction())}>LOG IN</LogDiv>
          {MenuShow && <ConMenu onClick={() => dispatch(NavAction())} />}
          <Menu onClick={() => dispatch(NavAction())}>
            <LinearScaleOutlinedIcon
              className="icon"
              style={{ fill: "white", fontSize: 40 }}
            />
          </Menu>
        </NavDiv>
      </Div>
      <MenuList2 />

      {Show && <Con onClick={() => dispatch(ShowCardAction())} />}

      <Acount Show={Show} />
    </ContainerDiv>
  );
};

const MapstateToProps = createStructuredSelector({
  Show: CardSelector,
  MenuShow: ShowSelector,
});
export default connect(MapstateToProps)(Header);
const Con = styled.div`
  position: absolute;
  top: 62px;
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(3, 0, 0, 0),
    rgba(51, 77, 94, 0.932)
  );
  width: 100%;
  height: 100vh;
`;
const ConMenu = styled.div`
  z-index: -1;
  position: absolute;
  top: 160px;
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(3, 0, 0, 0),
    rgba(51, 77, 94, 0.932)
  );
  width: 100%;
  height: 100vh;
`;
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
  cursor: pointer;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogDiv = styled.div`
  cursor: pointer;
  // text-decoration: none;
  color: white;
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
  gap: 20px;

  width: 30%;
  margin: 0 10px;
`;
