import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './pages/App';
import Account from './pages/Account';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import LogOut from './pages/LogOut';
import Checkout from './pages/CheckoutPage';
import Pricing from './pages/Pricing';
import Hello from './pages/Hello';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route default exact path="/" component={App} />
                    <Route path="/account" component={Account} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/register" component={Register} />
                    <Route path="/hello" component={Hello} />
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;