import React from "react";
import baner1 from "../../../styles/images/baner1.jpg";
import baner2 from "../../../styles/images/baner2.jpg";
import baner3 from "../../../styles/images/baner3.png";
import baner4 from "../../../styles/images/baner4.png";
export class Baner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="baner">
        <div class="wrapper">
          <div class="welcome">
            <h1 class="welcome_title">
              Witaj na stronie <span>Senior Care</span>
            </h1>
            <p class="welcome_text">
              Cóż robić? Jakiego lekarstwa szukać i gdzie? Jak sobie pomóc? Jak
              się odnaleźć w tym gąszczu niewiadomych Ciekawe, czy ktoś wie?
              Owszem, wiedzą ludzie, z dużym okładem wieku są przecież różne
              instytucje, nie daj się starości człowieku. Pomożemy we wszystkim
              aby ułatwić Ci życie. Zapraszamy !
            </p>
          </div>
          <div class="welcome_images">
            <div class="oneoftwo">
              <div class="left">
                <img src={baner1} />
              </div>
            </div>
            <div class="oneoftwo">
              <div class="right">
                <img src={baner2} />
                <div className="right-down">
                  <img src={baner3} />
                  <img src={baner4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
