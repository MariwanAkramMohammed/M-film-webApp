import React, { Component } from "react";
import styled from "styled-components";
import InputForm from "../InputForm/Input";
import LoginButton from "../Custom/LoginButton";
import {SignWithGoogle}from '../../firebase/firebase';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  submit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(email, "    -     ", password);
  };
  render() {
    return (
      <ConTainer className="login">
        <DivCon>
          <h1>LOGIN</h1>
          <FormDiv onSubmit={this.submit}>
            <ListDiv>
              <InputForm
                key={23}
                type="email"
                value={this.state.email}
                onChangeValue={this.onChangeValue}
                title="EMAIL"
                name="email"
              />
              <InputForm
                key={53}
                type="password"
                value={this.state.password}
                onChangeValue={this.onChangeValue}
                title="PASSWORD"
                name="password"
              />
            </ListDiv>
            <LoginButton type="submit" sign>
              login
            </LoginButton>
          </FormDiv>
          <LoginButton Click={true}>Login with google</LoginButton>
        </DivCon>
      </ConTainer>
    );
  }
}
export default SignIn;

const ConTainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DivCon = styled.div`
  width: 500px;
  height: 80vh;
  background: rgb(40, 48, 56);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;

  h1 {
    width: 100%;
    color: rgb(209, 229, 238);
    letter-spacing: 2px;
    border-bottom: 2px solid rgba(184, 209, 220, 0.055);
    border-radius: 20px;
    padding: 10px;
  }
`;
const ListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
const FormDiv = styled.form`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px 0px 0px;
`;
