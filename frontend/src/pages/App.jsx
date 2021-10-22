// saas-template/frontend/src/components/App.js

import React, { Component } from "react";
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className="site">
          <h1>Ahhsdfjsdkfskdfjhsdfk I'm free. Time to conquer the Earth!</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;