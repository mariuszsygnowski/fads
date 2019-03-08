import React, { Fragment } from "react";
import phoneSolid from "../../styles/images/phone-solid.svg";
import logoSeniorCare from "../../styles/images/LogoSeniorCare.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(`${this.props.url}contact`);

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
                  <Link to={`${this.props.url}`}>Home</Link>
                </li>
                <li>
                  <Link to={`${this.props.url}contact`}>Contadsact</Link>
                </li>
                {/* <li>
                    <a href="onas.html">O NAS</a>
                  </li>
                  <li>
                    <a href="praca.html">PRACA</a>
                  </li>
                  <li>
                    <a href="uslugi.html">KONTAKT</a>
                  </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
