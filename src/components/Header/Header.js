import React, { Fragment } from "react";
import phoneSolid from "../../styles/images/phone-solid.svg";
import logoSeniorCare from "../../styles/images/LogoSeniorCare.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Contact } from "../Main/Contact";
import { Home } from "../Main/Home";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
                  <Link to={`/`}>Home</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contadsasct</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
