import React, { Component } from 'react';
import API from '../../AxiosApi';

class LogOutButton extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    async logout() {
        try {
            const response = await API.post('/blacklist/', {
                "refresh_token": localStorage.getItem('refresh_token')
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            API.defaults.headers['Authorization'] = null;
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <button className="btn btn-danger" onClick={this.logout}>Log out</button>
        );
    }
}

export default LogOutButton;