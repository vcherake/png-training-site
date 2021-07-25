import React from "react";

import { Header, Box, Heading } from "grommet";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";

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
      <Box direction="row" background="dark-3" pad="small" justify="center">
        <Heading level="3" margin="none" color="dark-1">
          PNG Job Trainings
        </Heading>
      </Box>
      <Header
        background="light"
        pad={{ vertical: "small", left: "medium", right: "medium" }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default NavBar;
