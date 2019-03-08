import React from "react";
import access1 from "../../../styles/images/access1.svg";
import access2 from "../../../styles/images/access2.svg";
export class Access extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="access">
        <div class="wrapper">
          <div class="one-of-two">
            <div class="box-one-of-two">
              <div class="access-box">
                <div className="access-foto">
                  <img src={access1} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          <div class="one-of-two">
            <div class="box-one-of-two">
              <div class="access-box">
                <div className="access-foto">
                  <img src={access2} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
