import React from "react";
export class FotterBottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="bottom-bar">
        <div class="wrapper">
          <div className="one-of-two">
            <div class="box-bottom-bar">
              <p>2019 wszelkie prawa zastrzeżone</p>
              <p>Projekt i realizacja: Anna Bialik</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
