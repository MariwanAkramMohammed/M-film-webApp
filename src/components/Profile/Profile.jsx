import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Current_UserSelector } from "../../Redux/UserReducer/UserSelector";
import { Current_User_Action } from "../../Redux/UserReducer/UserAction";
import { ShowProCardAction } from "../../Redux/CrdReducer/CardAction";

import imgback from "../../assets/account2.png";
const Profile = ({ ProShow, CurrentUser, dispatch }) => {
  const { email, name, photo } = CurrentUser;
  const SignOut = async () => {
    await dispatch(Current_User_Action({}));
    dispatch(ShowProCardAction());
    signOut(auth);
  };
  return (
    <ProDiv ProShow={ProShow}>
      <ProAva src={imgback} />
      <ProPhoto src={photo} />
      <DIVLIST>
        <Divinfo>
          <h1>{name}</h1>
          <p>{email}</p>
        </Divinfo>
        <Button onClick={() => SignOut()}>Logout</Button>
      </DIVLIST>
    </ProDiv>
  );
};
const MapstateProps = createStructuredSelector({
  CurrentUser: Current_UserSelector,
});
export default connect(MapstateProps)(Profile);
const ProDiv = styled.div`
  box-shadow: 0px 10px 40px 10px rgba(16, 17, 19, 0.221);
  width: 250px;
  height: 400px;
  border-radius: 20px;
  position: absolute;
  top: 82px;
  right: 0;
  background-color: rgb(211, 226, 230);
  border: 4px solid rgb(187, 196, 198);

  backdrop-filter: blur(2px);
  transition: all 0.5s;
  transform: ${(props) =>
    props.ProShow ? `translateX(-70PX)` : `translateX(100%)`};
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; ;
`;
const ProAva = styled.img`
  position: relative;
  border-radius: 20px;
  width: 100%;
  height: 40%;
  margin-bottom: 50px;
`;
const ProPhoto = styled.img`
  width: 80px;
  height: 20%;
  border-radius: 100%;
  position: absolute;
  top: 25%;

  border: 3px solid rgb(236, 246, 248);
`;
const DIVLIST = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    color: rgb(94, 102, 103);
    text-transform: uppercase;
    font-size: 16px;
  }
  p {
    color: rgb(128, 135, 136);
    font-size: 10px;
  }
`;
const Divinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
`;
const Button = styled.div`
  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
  width: 80%;
  color: rgba(100, 120, 133, 0.632);
  border-bottom: 1px solid rgba(193, 212, 216, 0.546);
  background-color: rgb(246, 248, 249);
  border-radius: 20px;
  box-shadow: 0px 7px 5px 0px rgba(171, 215, 225, 0.329);
  cursor: pointer;
  padding: 10px;
  transition: all 1s;
  text-decoration: none;
  &:hover {
    color: rgba(21, 95, 105, 0.8);
  }
`;
// date
// :
// ut {seconds: 1656811826, nanoseconds: 219000000}
// email
// :
// "mariwanakrammohammed@gmail.com"
// id
// :
// "y28c6GvsLGgMHJpoUWw0N6WSLBy2"
// name
// :
// "Mariwan A-Mohammed"
// photo
// :
// "https://lh3.googleusercontent.com/a-/AOh14GjO4S6ggiAS4u8VnGvRQw6_Qnd7aqRm4_QXLChx=s96-c"
