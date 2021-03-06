import React, { Component } from "react";
import { Container, Form, Button, Card, CardBody } from "reactstrap";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import API from "../AxiosApi";
import NavigationBar from "./components/NavigationBar";

var style = {
  maxWidth: "500px",
  marginTop: "7.5vh",
  marginBottom: "15vh",
};

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  async login(event) {
    event.preventDefault();
    try {
      const response = await API.post("/token/obtain/", {
        username: this.state.email,
        password: this.state.password,
      });
      const { access, refresh } = response.data;

      //set token to local storage
      API.defaults.headers["Authorization"] = "JWT " + access;
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      this.props.history.push("/hello");

      return response;
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  inputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <NavigationBar />
        <Container className="h-100">
          <Card style={style} className="ml-auto mr-auto center">
            <CardBody className="w-100">
              <Form className="form-LogIn">
                <img
                  className="mb-4 center ml-auto mr-auto vertical-margin"
                  src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                  alt=""
                  width="72"
                  height="72"
                />
                <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                <p className="alert">{this.state.error}</p>
                <label htmlFor="inputEmail" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="inputEmail"
                  className="form-control vertical-margin"
                  placeholder="Email address"
                  required=""
                  autoFocus=""
                  value={this.state.email}
                  onChange={this.inputChange}
                />
                <label htmlFor="inputPassword" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="inputPassword"
                  className="form-control vertical-margin"
                  placeholder="Password"
                  required=""
                  onChange={this.inputChange}
                />
                <Button
                  className="btn btn-lg btn-primary btn-block"
                  type="button"
                  onClick={this.login}
                >
                  Sign in
                </Button>
                <p className="mt-5 mb-3 text-muted center">
                  Dont have an account? &nbsp;
                  <Link to="/register" className="link">
                    You can create one here.
                  </Link>
                </p>
                <p className="mt-5 mb-3 text-muted center">?? 2017-2018</p>
              </Form>
            </CardBody>
          </Card>
        </Container>
        <Footer />
      </>
    );
  }
}

export default LogIn;
