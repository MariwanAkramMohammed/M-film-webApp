import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import FullViews from "./Pages/FullViews/FullViews";
import Home from "./Pages/Home/Home";
import SignIn from "./components/Sign-IN/Sign_In";
import { onAuthStateChanged } from "firebase/auth";
import { auth, UserDocument } from "./firebase/firebase";
import SignUp from "./components/Sign_Up/Sign_up";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Current_UserSelector } from "./Redux/UserReducer/UserSelector";
import { Current_User_Action } from "./Redux/UserReducer/UserAction";

class App extends Component {
  unsub = null;
  componentDidMount() {
    const { dispatch } = this.props;
    this.unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const UserDocRef = await UserDocument(user);
        // await use to wait for result of UserDocument(user);
        //means wait for value it don't go to next line till you get data of UserDocument(user);
        onSnapshot(UserDocRef, (UserDocData) => {
          dispatch(
            Current_User_Action({ id: UserDocData.id, ...UserDocData.data() })
          );
        });
      }
    });
  }
  componentWillUnmount() {
    this.unsub = null;
  }
  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
    // && first false and last true;
    // console.log(8 && 4 &&9)
    // || first true last false
    // console.log(''||0)

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

const MapstateToProps = createStructuredSelector({
  currentUser: Current_UserSelector,
});
export default connect(MapstateToProps)(App);
