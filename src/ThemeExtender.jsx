import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "grommet/contexts";

const ThemeExtender = ({ theme, children }) => (
  <ThemeContext.Extend value={theme}>{children}</ThemeContext.Extend>
);

ThemeExtender.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ThemeExtender;
