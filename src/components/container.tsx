import React from "react";
import { Pane } from "evergreen-ui";

const Container = ({ children, ...styles }) => (
  <Pane
    maxWidth="1280px"
    marginX="auto"
    width="100%"
    {...styles}
    paddingX="40px"
  >
    {children}
  </Pane>
);

export default Container;
