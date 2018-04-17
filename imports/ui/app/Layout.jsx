import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Full from "./Full";
import Store from "./Store";

const Layout = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <Switch>
        <Route path="/" name="Home" component={Full} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export default Layout;
