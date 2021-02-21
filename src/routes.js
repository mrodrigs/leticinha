import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from './views/Cart/Cart';
import Confirm from './views/Confirm/Confirm';
import Home from './views/Home/Home';

export default function Routes() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
                      {/*component*/}
          </Route>
          <Route exact path="/cart" component={Cart}>
                      {/*component*/}
          </Route>
          <Route exact path="/confirm" component={Confirm}>
                      {/*component*/}
          </Route>
        </Switch>
      </Router>
    );
  }