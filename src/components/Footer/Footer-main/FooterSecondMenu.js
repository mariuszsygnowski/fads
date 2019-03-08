import React from "react";
export class FooterSecondMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="second-menu">
        <div class="wrapper">
          <div class="box-second-menu">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="kontakt.html">USŁUGI</a>
              </li>
              <li>
                <a href="onas.html">O NAS</a>
              </li>
              <li>
                <a href="praca.html">PRACA</a>
              </li>
              <li>
                <a href="uslugi.html">KONTAKT</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
