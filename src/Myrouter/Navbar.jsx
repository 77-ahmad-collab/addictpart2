import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Proptest from "./Proptest";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact="/proptest">
          <Proptest />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Navbar;
