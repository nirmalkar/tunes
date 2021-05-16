import React from "react";
import propTypes from "prop-types";

function Layout({ children }) {
  return <div style={{ height: "100vh" }}>{children}</div>;
}
Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
