import React from "react";
import { Route } from "react-router-dom";

import Home from "containers/Home";
import Radio from "containers/Radio";
import Auth from "containers/Authentication";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/radio" component={Radio} />
      <Route exact path="/podcast" component={Radio} />
      <Route exact path="/auth" component={Auth} />
    </div>
  );
};

export default Routes;
