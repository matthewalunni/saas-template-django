import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './pages/App';
import Account from './pages/Account';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import LogOut from './pages/LogOut';
import Checkout from './pages/Checkout';
import Pricing from './pages/Pricing';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route default exact path="/" component={App} />
                    <Route path="/account" component={Account} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/register" component={Register} />
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;