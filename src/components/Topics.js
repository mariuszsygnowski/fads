import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
export class Topics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route
          path={`${this.props.match.url}/:topicId`}
          render={() => <h3>Please select a topic.</h3>}
        />
        <Route
          exact
          path={this.props.match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}
