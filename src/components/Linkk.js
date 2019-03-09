import React from "react";
import { Link } from "react-router-dom";
export class Linkk extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Homee</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    );
  }
}
