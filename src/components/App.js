import autoBind from "auto-bind";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../styles/components/main.less";
import { Footer } from "./Footer/Footer";

import { Header } from "./Header/Header";
import { Contact } from "./Main/Contact";
import { Home } from "./Main/Home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  render() {
    // console.log(window.location.pathname);

    return (
      <Router basename={"fads/"}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
