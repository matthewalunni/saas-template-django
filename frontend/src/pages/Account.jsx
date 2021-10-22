import React, { Component } from "react";
import Footer from "./components/Footer";
import SignIn from "./LogIn";


class Account extends Component {
  render() {
    return (
      <>
        <SignIn/> 
        <Footer />
      </>
    );
  }
}

export default Account;
