import React, { Component } from 'react';
import CSRFToken from '../../CsrfToken';
import LogIn from '../LogIn';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const checkoutStyles = {
    section: {
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        width: "400px",
        height: "112px",
        borderRadius: "6px",
        justifyContent: "space-between",
    },

    product: {
        display: "flex",
    },

    description: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    p: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "-0.154px",
        color: "#242d60",
        height: "100%",
        width: "100%",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
    },

    img: {
        borderRadius: "6px",
        margin: "10px",
        width: "54px",
        height: "57px",
    },

    h3: {
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "-0.154px",
        color: "#242d60",
        margin: "0",
    },

    h5: {
        opacity: "0.5",
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "-0.154px",
        color: "#242d60",
        margin: "0",
    },

    button: {
        height: "36px",
        background: "#556cd6",
        color: "white",
        width: "100%",
        fontSize: "14px",
        border: "0",
        fontWeight: "500",
        cursor: "pointer",
        letterSpacing: "0.6",
        borderRadius: "0 0 6px 6px",
        transition: "all 0.2s ease",
        boxShadow: "0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",

        "&:hover": {
            opacity: "0.8",
        },
    },
}

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            loggedIn: false,
        };
        this.useEffect = this.useEffect.bind(this);
    }

    useEffect = () => {
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            this.state.message = "Payment successful!";
        }
        if (query.get("canceled")) {
            this.state.message = "Payment canceled!";
        }
    }



    render() {
        if (this.state.message && this.state.loggedIn) {
            return (
                <section style={checkoutStyles.section}>
                    <p style={checkoutStyles.p}>{message}</p>
                </section>
            );
        }
        else if (this.state.loggedIn) {
            //product display
            return (
                <section style={checkoutStyles.section}>
                    <div style={checkoutStyles.product}>
                        <img style={checkoutStyles.img}
                            src="https://i.imgur.com/EHyR2nP.png"
                            alt="The cover of Stubborn Attachments"
                        />
                        <div style={checkoutStyles.description}>
                            <h3 style={checkoutStyles.h3}>Stubborn Attachments</h3>
                            <h5 style={checkoutStyles.h5}>$20.00</h5>
                        </div>
                    </div>
                    <form action="/api/create-checkout-session/" method="POST">
                        <CSRFToken />
                        <button style={checkoutStyles.button} type="submit">
                            Checkout
                        </button>
                    </form>
                </section>
            );
        }
        else {
            return (
                <>
                    <NavigationBar />
                    <LogIn />
                    <Footer />
                </>
            );
        }

    }
}

export default Checkout;