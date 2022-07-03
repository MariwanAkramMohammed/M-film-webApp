import React from "react";
import styled from "styled-components";
const InputForm = ({ type, value, onChangeValue, title, name }) => {
  const input = {
    email: "email",
    pass: "password",
    Change: "",
    title: "email",
  };

  return (
    <ConDiv>
      <Input
        type={type}
        value={value}
        onChange={onChangeValue}
        placeholder={title}
        name={name}
        required
      />
    </ConDiv>
  );
};
export default InputForm;
const ConDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(166, 192, 199, 0.6);
  :hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.53);
  }
`;
const Input = styled.input`
  border: none;
  background: rgb(40, 48, 56);
  width: 100%;
  height: 50px;
  font-size: 12px;
  /* text-align: center; */
  /* border-radius: 15px; */
  padding: 10px;

  color: rgb(231, 246, 246);
  letter-spacing: 1.2px;
  :hover {
    background-color: rgba(166, 192, 199, 0.02);
  }
  :focus {
    outline: none;
  }
`;
