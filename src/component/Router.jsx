import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../sass/style.scss';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    fas,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
} from '@fortawesome/free-solid-svg-icons'

library.add(
    fas,
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
);

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"
                           component={App}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;