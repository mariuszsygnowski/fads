import autoBind from "auto-bind";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "../styles/components/main.less";
import { Footer } from "./Footer/Footer";
// import { Header } from "./Header/Header";
import { Contact } from "./Main/Contact";
import { Home } from "./Main/Home";

import phoneSolid from "../styles/images/phone-solid.svg";
import logoSeniorCare from "../styles/images/LogoSeniorCare.svg";
import { Linkk } from "./Linkk";
import { Topics } from "./Topics";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  render() {
    // console.log(window.location.pathname);

    return (
      <Router>
        <Fragment>
          <Linkk />

          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
        </Fragment>
      </Router>
    );
  }
}
