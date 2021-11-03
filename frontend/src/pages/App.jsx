// saas-template/frontend/src/components/App.js

import React, { Component } from "react";
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Container style={{marginBottom: '100px'}}>
          <div className="site">
            <h1 style={{ marginTop: '25px' }}>Hi.</h1>
            <h1>My name is Matthew.</h1>
            <br />
            <h2>I'm a full-stack developer. This is my SAAS Template.</h2>
            <h4>Bootstrap/React/JWT/Stripe/Python/Django/Postgresql</h4>
            <br />
            <h6>My template to quick start a SAAS project.</h6>
            <p>Stop losing time implementing authentication and payment over and over again. Focus on what brings value to your customers.</p>
            <h4>Demo</h4>
            <h4>Features</h4>
            <h4>Stripe</h4>
            <h4>Postgresql</h4>
            <h4>Made With</h4>
            <h4>Develop</h4>
            <h4>Inspirations</h4>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;