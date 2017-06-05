import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Redux App ES6.</h1>
        <p>React, Redux & React-Router in ES6.</p>
        <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}
