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
import { Link } from 'react-router-dom';
import API from '../axiosApi';


var style = {
  maxWidth: "500px",
  marginTop: "7.5vh",
}

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      email: '',
      password: '',
    }
  }

  async login(event) {
    console.log("Trying to log in.");
    event.preventDefault();
    try {
      const response = await API.post('/token/obtain/', {
        username: this.state.email,
        password: this.state.password,
      });
      
      API.defaults.headers['Authorization'] = "JWT " + response.data.access;
      console.log(response.data);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      console.log(localStorage.getItem('access_token'), localStorage.getItem('refresh_token'));
      return response;
    } catch (error) {
      throw error;
    }
  }

  inputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
                    name="email"
                    id="inputEmail"
                    className="form-control vertical-margin"
                    placeholder="Email address"
                    required=""
                    autoFocus=""
                    value={this.state.email}
                    onChange={this.inputChange} />
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input
                    name="password"
                    type="password"
                    id="inputPassword"
                    className="form-control vertical-margin"
                    placeholder="Password"
                    required=""
                    onChange={this.inputChange} />
                  <Button
                    className="btn btn-lg btn-primary btn-block"
                    type="button"
                    onClick={this.login}
                  >Sign in</Button>
                  <p className="mt-5 mb-3 text-muted center">
                    Dont have an account? &nbsp;
                    <Link to="/register" className="link">You can create one here.</Link>
                  </p>
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
