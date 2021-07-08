import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Singin } from './components/Singin'
import { Login } from './components/Login';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

export const App = () => {
  return(
    <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact>
                <Singin 

                />
            </Route>

            <Route path="/menu">
                <Menu />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

          </Switch>

          <Footer />
          
        </Fragment>
      </Router>
      
  );
}