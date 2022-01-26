import React, { Component } from "react";
import "./App.css";
import Navbar from "./componants/navbar/navbar";
import Content from "./componants/content/content";
import { Routes, Route } from "react-router-dom";
import Signinpage from "./pages/signinpage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribefromauth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signin" element={<Signinpage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
