import React, { Component } from 'react';
import {
  Container,
  Form,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';


var style = {
  maxWidth: "500px",
  marginTop: "7.5vh",
}

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.state = {
      credentials: {
        username: '',
        password: '',
      }
    }
  }

  login = (event) => {
    console.log(this.state.credentials);
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.credentials),
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  inputChange = (event) => {
    const credentials = this.state.credentials;
    credentials[event.target.name] = event.target.value;
    this.setState({ credentials: credentials });
  }

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj.email);
  }

  render() {
    return (
      <>
        <NavigationBar />
        <Container className="h-100">
          <main>
            {this.props.children}
            <Card style={style} className="ml-auto mr-auto center">
              <CardBody className="w-100">
                <Form className="form-signin">
                  <img className="mb-4 center ml-auto mr-auto vertical-margin" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                  <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                  <label htmlFor="inputEmail" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control vertical-margin"
                    placeholder="Email address"
                    required=""
                    autoFocus=""
                    value={this.state.credentials.username}
                    onChange={this.inputChange} />
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control vertical-margin" placeholder="Password" required="" />
                  <Button
                    className="btn btn-lg btn-primary btn-block"
                    type="button"
                    onClick={() => signIn()}
                  >Sign in</Button>
                  <p className="mt-5 mb-3 text-muted center">© 2017-2018</p>
                </Form>
              </CardBody>
            </Card>
          </main>
        </Container>
        <Footer />
      </>
    );
  }
}

export default SignIn;
