import React from "react";
import services1 from "../../../styles/images/services1.svg";
import services2 from "../../../styles/images/services2.svg";
import services3 from "../../../styles/images/services3.svg";
import services4 from "../../../styles/images/services4.svg";
export class ServicesDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="our-services-details">
        <div class="wrapper">
          <div class="oneoffour">
            <div class="box">
              <div class="inner_box">
                <div class="circle">
                  <img src={services1} alt="" />
                </div>
                <h2>Podawanie leków</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis, inventore dolor a ipsum asperiores qui odio
                  soluta facere cupiditate eos, minima doloribus, officiis quis
                  delectus vitae maxime! Ipsa, aspernatur, sint. Lorem Ipsum
                  jest tekstem stosowanym jako przykładowy wypełniacz w
                  przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                  przez nieznanego drukarza do wypełnienia tekstem próbnej
                  książki. Pięć wieków później zaczął być używany przemyśle
                  elektronicznym.
                </p>
              </div>
            </div>
          </div>
          <div class="oneoffour">
            <div class="box">
              <div class="inner_box">
                <div class="circle">
                  <img src={services2} alt="" />
                </div>
                <h2>Badanie EKG</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis, inventore dolor a ipsum asperiores qui odio
                  soluta facere cupiditate eos, minima doloribus, officiis quis
                  delectus vitae maxime! Ipsa, aspernatur, sint. Lorem Ipsum
                  jest tekstem stosowanym jako przykładowy wypełniacz w
                  przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                  przez nieznanego drukarza do wypełnienia tekstem próbnej
                  książki. Pięć wieków później zaczął być używany przemyśle
                  elektronicznym.
                </p>
              </div>
            </div>
          </div>
          <div class="oneoffour">
            <div class="box">
              <div class="inner_box">
                <div class="circle">
                  <img src={services3} alt="" />
                </div>
                <h2>Gotowanie</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis, inventore dolor a ipsum asperiores qui odio
                  soluta facere cupiditate eos, minima doloribus, officiis quis
                  delectus vitae maxime! Ipsa, aspernatur, sint.Lorem Ipsum jest
                  tekstem stosowanym jako przykładowy wypełniacz w przemyśle
                  poligraficznym. Został po raz pierwszy użyty w XV w. przez
                  nieznanego drukarza do wypełnienia tekstem próbnej książki.
                  Pięć wieków później zaczął być używany przemyśle
                  elektronicznym.
                </p>
              </div>
            </div>
          </div>
          <div class="oneoffour">
            <div class="box">
              <div class="inner_box">
                <div class="circle">
                  <img src={services4} alt="" />
                </div>
                <h2>Pierwsza pomoc</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis, inventore dolor a ipsum asperiores qui odio
                  soluta facere cupiditate eos, minima doloribus, officiis quis
                  delectus vitae maxime! Ipsa, aspernatur, sint. Lorem Ipsum
                  jest tekstem stosowanym jako przykładowy wypełniacz w
                  przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                  przez nieznanego drukarza do wypełnienia tekstem próbnej
                  książki. Pięć wieków później zaczął być używany przemyśle
                  elektronicznym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
