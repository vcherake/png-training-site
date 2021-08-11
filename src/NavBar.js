import React from "react";

import { TextInput, Text, Header, Box, Heading, Footer } from "grommet";

import Register from "./Register";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Advertise from "./Advertise";
import SignIn from "./SignIn";

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
      <Header
        background="light"
        pad={{ vertical: "small", left: "medium", right: "medium" }}
        gap="large"
        direction="row"
        justify="center"
      >
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/advertise">Advertise</Link>
        <Link to="/contact">Contact Us</Link>
      </Header>
      <Box direction="row" background="dark-3" pad="small" justify="center">
        <Heading level="3" margin="none" color="dark-1">
          UpSkillPNG
        </Heading>
      </Box>
      <Box direction="row" background="dark-3" pad="small" justify="center">
        <Box justify="center" direction="row">
          <Text level="4" margin="none" color="dark-1">
            SEARCH FOR TRAINING
          </Text>
        </Box>
      </Box>
      <Box direction="row" justify="start" pad="large">
        <Box width="medium" direction="row">
          <Text>Search by Keyword</Text>
          <TextInput value="" onChange="" />
        </Box>
        <Box width="medium" direction="row">
          <Text>Search by Category</Text>
          <TextInput value="" onChange="" />
        </Box>
        <Box width="medium" direction="row">
          <Text>Search by Location</Text>
          <TextInput value="" onChange="" />
        </Box>
      </Box>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/advertise" component={Advertise} />
        <Route path="/signin" component={SignIn} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer background="light-4" justify="center" pad="small">
        <Text textAlign="center" color="dark-1">
          UpSkillPNG &copy; 2021
        </Text>
      </Footer>
    </Router>
  );
}

export default NavBar;
