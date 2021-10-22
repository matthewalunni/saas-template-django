import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { Link } from "react-router-dom";

var style = {
    marginBottom: '10px',
}

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.setIsOpen = this.setIsOpen.bind(this);
        this.state = {
            isOpen: false,
        };

    }

    setIsOpen = (isOpen) => {
        this.setState({ isOpen: isOpen });
    }

    toggle = () => {
        console.log("toggle");
        this.setIsOpen(!this.state.isOpen);
    }

    render() {
        return (
            <div>
                <Navbar style={style} color="light" light expand="md">
                    <Link className="navbar-brand" to="/">Workflow</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/account">Account</Link>
                            </NavItem>

                            <NavItem>
                                <Link className="nav-link" to="/hello">hello</Link>
                            </NavItem>

                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;