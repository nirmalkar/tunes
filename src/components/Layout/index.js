import React from "react";
import propTypes from "prop-types";

function Layout({ children }) {
  return <div className="layout-height">{children}</div>;
}
Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
