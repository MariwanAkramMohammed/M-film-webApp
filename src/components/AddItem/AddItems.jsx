import React, { Component } from "react";
import styled from "styled-components";
import InputForm from "../InputForm/Input";
import { AddItemToDb } from "../../firebase/firebase";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      land_Scape_Img: "",
      description: "",
      catigory: "",
    };
  }
  HandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  Submit = async (event) => {
    event.preventDefault();
    const { name, image_url, description, land_Scape_Img, catigory } =
      this.state;
    await AddItemToDb(name, image_url, land_Scape_Img, description, catigory);
    this.setState({
      name: "",
      image_url: "",
      land_Scape_Img: "",
      description: "",
      catigory: "",
    });
  };

  render() {
    const { name, image_url, land_Scape_Img, description, catigory } =
      this.state;
    return (
      <DivCon className="man">
        <div>man</div>
        <FormInp onSubmit={this.Submit}>
          <InputForm
            type="text"
            name="name"
            onChangeValue={this.HandleChange}
            title="Name"
            value={name}
            Class={true}
          />
          <InputForm
            type="text"
            name="image_url"
            onChangeValue={this.HandleChange}
            title="Image Url"
            value={image_url}
            Class={true}
          />
          <InputForm
            type="text"
            name="land_Scape_Img"
            onChangeValue={this.HandleChange}
            title="Landscape Image Url"
            value={land_Scape_Img}
            Class={true}
          />
          <InputForm
            type="text"
            name="description"
            onChangeValue={this.HandleChange}
            title="description"
            value={description}
            Class={true}
          />

          <Select
            name="catigory"
            onChange={this.HandleChange}
            value={catigory}
            required
          >
            <optgroup label="Catigories">
              <option value=""></option>
              <option value="movies">Movies</option>
              <option value="series">Series</option>
            </optgroup>
          </Select>

          <Button>Submit</Button>
        </FormInp>
      </DivCon>
    );
  }
}
export default AddItem;
const DivCon = styled.div`
  width: 100%;
  height: 80vh;
  border-radius: 30px;
  overflow: hidden;
  border: 2px solid rgba(177, 177, 177, 0.269);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const FormInp = styled.form`
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  font-size: 15px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 35%;
  color: white;
  // border-bottom: 1px solid rgba(193, 212, 216, 0.546);
  background-image: linear-gradient(to right, rgb(0, 240, 0), rgb(0, 129, 0));
  border-radius: 10px;
  box-shadow: 0px 7px 5px 0px rgba(171, 215, 225, 0.329);
  cursor: pointer;
  padding: 13px;
  transition: all 1s;
  text-decoration: none;
`;
const Select = styled.select`
  width: 20%;
  font-size: 15px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  padding: 13px;
  border: none;
  border-bottom: 2px solid rgb(10, 217, 44);
  // background-color: rgba(218, 236, 243, 0.438);
  color: rgb(1, 155, 27);
`;
