import React, { Component } from "react";
import "./App.css";
import Navbar from "./componants/navbar/navbar";
import Content from "./componants/content/content";
import { Routes, Route } from "react-router-dom";
import Signinpage from "./pages/signinpage";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentuser: null,
    };
  }

  unsubscribefromauth = null;

  componentWillMount() {
    this.unsubscribefromauth = auth.onAuthStateChanged((user) => {
      console.log(user);
      this.setState({ currentuser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar currentuser={this.state.currentuser} />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signin" element={<Signinpage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
