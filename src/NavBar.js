import React from "react";

import { Header, Button, Menu } from "grommet";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";

function NavBar() {
  return (
    <Router>
      <Header background="brand" gap="medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default NavBar;
