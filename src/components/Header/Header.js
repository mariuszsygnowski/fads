import React, { Fragment } from "react";
import phoneSolid from "../../styles/images/phone-solid.svg";
import logoSeniorCare from "../../styles/images/LogoSeniorCare.svg";
import {
  BrowserRouter as Redirect,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { Contact } from "../Main/Contact";
import { Home } from "../Main/Home";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <header>
        <div class="header_telephone_bar">
          <div class="wrapper">
            <div class="header_contact_data">
              <div class="header_telephone_icon">
                <img src={phoneSolid} />
              </div>
              <p>
                <a href="tel:+48725658420"> +48 725 658 420</a>
              </p>
            </div>
          </div>
        </div>
        <div class="main_bar">
          <div class="wrapper">
            <div class="logo">
              <a href="#">
                <img src={logoSeniorCare} />
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Homee</Link>
                </li>
                <li>
                  <Link to="/contact">Kontack </Link>
                </li>
              </ul>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route render={() => <h1>404 Error</h1>} />
                <Redirect to="/" />
              </Switch>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
