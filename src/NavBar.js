import React from "react";

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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default NavBar;
