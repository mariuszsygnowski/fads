export const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match}/rendering`} component={Topic} />
    <Route path={`${match}/components`} component={Topic} />
    <Route path={`${match}/props-v-state`} component={Topic} />
  </div>
);

export const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
