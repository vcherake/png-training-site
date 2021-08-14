import React from "react";
import { Grommet, ResponsiveContext } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";

import NavBar from "./NavBar";

const theme1 = deepMerge(grommet, {
  global: {
    colors: {
      brand: "green",
      light: "light-3",
      auto: "black",
    },
    font: {
      family: "Arial, Helvetica, Lato, Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

function App() {
  return (
    <Grommet theme={theme1}>
      <ResponsiveContext.Consumer>
        {(size) => <NavBar />}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
