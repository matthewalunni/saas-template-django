import React, { Component } from 'react';


var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    marginTop: "10px",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

// var phantom = {
//     display: 'block',
//     padding: '20px',
//     height: '60px',
//     width: '100%',
// }




export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: props.children,
        }
    }
    render() {
        return (
            <>
                {/* <div style={phantom} /> */}
                <div style={style}>
                    {this.state.children}
                    <p>Copyright goes here.</p>
                </div>
            </>
        );
    }
}