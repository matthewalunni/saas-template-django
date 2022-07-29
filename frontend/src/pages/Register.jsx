import React, { Component } from "react";
import { Container, Form, Button, Card, CardBody } from "reactstrap";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import API from "../AxiosApi";

var style = {
  maxWidth: "500px",
  marginTop: "7.5vh",
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      password: "",
      error: undefined,
    };
    this.inputChange = this.inputChange.bind(this);
    this.register = this.register.bind(this);
  }

  inputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  async register(event) {
    event.preventDefault();
    try {
      const response = await API.post("/user/create/", {
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        password: this.state.password,
        username: this.state.email,
      });

      console.log(response);
      // route to the hello pages
      this.props.history.push("/hello");

      return response;
    } catch (error) {
      this.setState({
        error: error.toJSON().message,
      });
      console.log(this.state);
    }
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
                <Form className="form-register" onSubmit={this.register}>
                  <img
                    className="mb-4 center ml-auto mr-auto vertical-margin"
                    src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                    alt=""
                    width="72"
                    height="72"
                  />
                  <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>

                  <p>{this.state.error ? this.state.error : null}</p>

                  <label htmlFor="first" className="sr-only">
                    First Name
                  </label>
                  <input
                    onChange={this.inputChange}
                    type="text"
                    id="first"
                    className="form-control vertical-margin"
                    placeholder="First Name"
                    required
                    autoFocus=""
                    name="first"
                  />

                  <label htmlFor="last" className="sr-only">
                    Last Name
                  </label>
                  <input
                    onChange={this.inputChange}
                    type="text"
                    id="last"
                    className="form-control vertical-margin"
                    placeholder="Last Name"
                    required=""
                    autoFocus=""
                    name="last"
                  />
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    onChange={this.inputChange}
                    type="email"
                    id="email"
                    className="form-control vertical-margin"
                    placeholder="Email address"
                    required=""
                    autoFocus=""
                    name="email"
                  />
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    onChange={this.inputChange}
                    type="password"
                    id="password"
                    className="form-control vertical-margin"
                    placeholder="Password"
                    required=""
                    name="password"
                  />
                  <Button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                  >
                    Register
                  </Button>
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

export default Register;
