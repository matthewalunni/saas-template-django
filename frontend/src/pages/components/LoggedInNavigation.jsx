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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import API from '../../AxiosApi';

var style = {
    marginBottom: '10px',
}

class LoggedInNavigation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.setIsOpen = this.setIsOpen.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            isOpen: false,
        };

    }


    async logout() {
        try {
            const response = await API.post('/blacklist/', {
                "refresh_token": localStorage.getItem('refresh_token')
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            API.defaults.headers['Authorization'] = null;

            //reroute to home page
            window.location.href = '/';

            return response;
        }
        catch (error) {
            console.log(error);
        }
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
                    <Link className="navbar-brand" to="/">SAAS-Template</Link>
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
                                <DropdownToggle style={{
                                    backgroundColor: '#CDE7BE', 
                                    width: '50px', 
                                    height: '50px',
                                    borderRadius: '100px',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    display: 'flex',
                                    }} nav>
                                    <FontAwesomeIcon style={{margin: "auto", color: 'black'}} icon={faSignOutAlt} />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    </DropdownItem>
                                    <DropdownItem>
                                        Account
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.logout}>
                                        Log Out
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

export default LoggedInNavigation;