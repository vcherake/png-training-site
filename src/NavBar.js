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

const linkStyle = {
  textDecoration: "none",
};

function NavBar() {
  return (
    <Router>
      <Header
        // pad={{ vertical: "xsmall", left: "medium", right: "medium" }}
        pad={{ vertical: "medium" }}
        gap="large"
        direction="row"
        justify="center"
        // height="xsmall"
        // background="dark-3"
      >
        <Link style={linkStyle} to="/">
          Home
        </Link>
        <Link style={linkStyle} to="/register">
          Register
        </Link>
        <Link style={linkStyle} to="/signin">
          Sign In
        </Link>
        <Link style={linkStyle} to="/advertise">
          Advertise
        </Link>
        <Link style={linkStyle} to="/contact">
          Contact Us
        </Link>
      </Header>
      <Box direction="row" pad="medium" justify="center">
        <Heading level="1" margin="none">
          <span style={{ color: "#FFE600" }}>Up</span>
          <span style={{ color: "#FF0000" }}>Skill</span>
          <span style={{ color: "#000000" }}>PNG</span>
        </Heading>
      </Box>
      <Box direction="row" justify="center" pad="small">
        {/* <Box justify="center" align="end" direction="column"> */}
        <Text size="large" margin="none" color="auto">
          SEARCH FOR TRAINING
        </Text>
        {/* </Box> */}
      </Box>

      <Box
        direction="row"
        justify="evenly"
        pad={{ top: "small", bottom: "small", right: "large", left: "large" }}
        margin={{ bottom: "medium" }}
        background="#EEA10C"
        border
        round
      >
        <Box direction="row">
          <Text color="auto">Search by Keyword</Text>
          <TextInput value="" background="white" />
        </Box>
        <Box direction="row">
          <Text color="auto">Search by Category</Text>
          <TextInput value="" />
        </Box>
        <Box direction="row">
          <Text color="auto">Search by Location</Text>
          <TextInput value="" />
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
        <Text textAlign="center" color="auto">
          UpSkillPNG &copy; 2021
        </Text>
      </Footer>
    </Router>
  );
}

export default NavBar;
