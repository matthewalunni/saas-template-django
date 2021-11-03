import React, { Component } from "react";
import API from "../AxiosApi";
import LogIn from "./LogIn";
import LoggedInNavigation from "./components/LoggedInNavigation";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };

        this.getMessage = this.getMessage.bind(this)
    }

    async getMessage() {
        try {
            let response = await API.get("/hello");
            const message = response.data.hello;
            this.setState({ message: message });
            return message;
        } catch (error) {
            throw error;
        }
    }

    async componentDidMount() {
        // It's not the most straightforward thing to run an async method in componentDidMount

        // Version 1 - no async: Console.log will output something undefined.
        const messageData1 = await this.getMessage();
        console.log("messageData1: ", JSON.stringify(messageData1, null, 4));
    }

    render() {
        if (this.state.message == "") {

            return (
                <>
                    <NavigationBar />
                    <LogIn />
                </>);
        }
        else {
            return (
                <>
                    <LoggedInNavigation />
                    <div>
                        <h1>Hello, you are logged in!</h1>
                        <h3>Congratulations!</h3>
                        <p>{this.state.message}</p>
                    </div>
                    <Footer />
                </>
            );
        }

    }
}

export default Hello;