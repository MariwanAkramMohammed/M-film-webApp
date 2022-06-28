import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Views from "./components/Views/Views";
import { Routes, Route } from "react-router-dom";
import FullViews from './Pages/FullViews/FullViews'

import Home from "./Pages/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/view/*' element={<FullViews/>}/> 
        </Routes>
      </div>
    );
  }
}

export default App;
