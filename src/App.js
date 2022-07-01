import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import FullViews from "./Pages/FullViews/FullViews";
import Home from "./Pages/Home/Home";
import SignIn from "./components/Sign-IN/Sign_In";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
   <Route path='/sign' element={<SignIn/>}/>
          <Route path="/view/*" element={<FullViews />} />
        </Routes>
      </div>
    );
  }
}

export default App;
