import React from "react";
import propTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  );
}
Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
