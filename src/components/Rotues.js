import React from "react";
import { Home } from "./Main/Home";
import { Contact } from "./Main/Contact";

import { Route, Switch, Redirect } from "react-router-dom";
export default function Routes(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
