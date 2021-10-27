import React, { Component } from 'react';
import {
  Container,
  Form,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import API from '../AxiosApi';

var style = {
  maxWidth: "500px",
  marginTop: "7.5vh",
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      errors: {},
    };
    this.inputChange = this.inputChange.bind(this);
    this.register = this.register.bind(this);
  }



  inputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  async register(event) {
    event.preventDefault();
    console.log(this.state);
    try {
        const response = await API.post('/user/create/', {
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            password: this.state.password
        });
        console.log(response);
        return response;
    } catch (error) {
         console.log(error.stack);
         this.setState({
          errors:error.response.data
      });
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
                  <img className="mb-4 center ml-auto mr-auto vertical-margin" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                  <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                  <label htmlFor="first" className="sr-only">First Name</label>
                  <input
                    onChange={this.inputChange} 
                    type="text" id="first" 
                    className="form-control vertical-margin" 
                    placeholder="First Name" 
                    required autoFocus="" 
                    name="first"
                    />
                  { this.state.errors.first ? this.state.errors.first : null}

                  <label htmlFor="last" className="sr-only">Last Name</label>
                  <input
                    onChange={this.inputChange} 
                    type="text" id="last" 
                    className="form-control vertical-margin" 
                    placeholder="Last Name" 
                    required="" autoFocus="" 
                    name="last"
                    />
                  { this.state.errors.last ? this.state.errors.last : null}

                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    onChange={this.inputChange} 
                    type="email" id="email" 
                    className="form-control vertical-margin" 
                    placeholder="Email address" 
                    required="" autoFocus="" 
                    name="email"
                    />
                  { this.state.errors.email ? this.state.errors.email : null}

                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    onChange={this.inputChange} 
                    type="password" id="password" 
                    className="form-control vertical-margin" 
                    placeholder="Password" 
                    required="" 
                    name="password"
                    />
                  { this.state.errors.password ? this.state.errors.password : null}

                  <Button 
                    className="btn btn-lg btn-primary btn-block" 
                    type="submit"
                  >Register</Button>
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
