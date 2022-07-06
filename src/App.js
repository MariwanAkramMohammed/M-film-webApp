import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import FullViews from "./Pages/FullViews/FullViews";
import Home from "./Pages/Home/Home";
import SignIn from "./components/Sign-IN/Sign_In";
import { onAuthStateChanged } from "firebase/auth";
import { auth, UserDocument,GetDataFb } from "./firebase/firebase";
import SignUp from "./components/Sign_Up/Sign_up";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";

import { Current_User_Action } from "./Redux/UserReducer/UserAction";

class App extends Component {
  unsub = null;
  componentDidMount() {
    const { dispatch } = this.props;
    this.unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const UserDocRef = await UserDocument(user);
        onSnapshot(UserDocRef, (UserDocData) => {
          dispatch(
            Current_User_Action({ id: UserDocData.id, ...UserDocData.data() })
          );
        });
      }
    });
    GetDataFb()
  }
  componentWillUnmount() {
    this.unsub = null;
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Acount />} /> */}
          <Route path="/sign" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/view/*" element={<FullViews />} />
        </Routes>
      </div>
    );
  }
}

export default connect(null)(App);
