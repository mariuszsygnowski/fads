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
          <Link to="/fads/">Home</Link>
        </li>
        <li>
          <Link to="/fads/topics">Topics</Link>
        </li>
      </ul>
    );
  }
}
