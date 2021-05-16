import React from "react";
import { Route } from "react-router-dom";

import Home from "containers/Home";
import Radio from "containers/Radio";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/radio" component={Radio} />
      <Route exact path="/podcast" component={Radio} />
    </>
  );
};

export default Routes;
