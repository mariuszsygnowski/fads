import React from "react";
import { Baner } from "./Home/Baner";
import { Services } from "./Home/Services";
import { ServicesDetails } from "./Home/ServicesDetails";
import { Access } from "./Home/Access";
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Baner />
        <Services />
        <ServicesDetails />
        <Access />
      </div>
    );
  }
}
