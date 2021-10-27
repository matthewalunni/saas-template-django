import React, { Component } from "react";
import Footer from "./components/Footer";
import LogIn from "./LogIn";
import NavigationBar from "./components/NavigationBar";


class Account extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <LogIn/>
        <Footer />
      </>
    );
  }
}

export default Account;
