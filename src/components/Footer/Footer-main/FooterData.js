import React from "react";
import mail from "../../../styles/images/mail.svg";
import phone from "../../../styles/images/telefon.svg";
import facebook from "../../../styles/images/facebook.svg";
export class FooterData extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="our-data">
        <div class="wrapper">
          <div class="one-of-three">
            <div class="box-one-of-three">
              <div class="footer-box">
                <div class="footer-icon">
                  <img src={phone} alt="" />
                </div>
                <p>
                  <a href="tel:+48725658420">+48 725 658 420</a>
                </p>
              </div>
            </div>
          </div>

          <div class="one-of-three">
            <div class="box-one-of-three">
              <div class="footer-box">
                <div class="footer-icon">
                  <img src={mail} alt="" />
                </div>
                <p>gabriela.nowicka8@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="one-of-three">
            <div class="box-one-of-three">
              <div class="footer-box">
                <div class="footer-icon">
                  <img src={facebook} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
