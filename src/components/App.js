import React from 'react';
import Header from './common/Header';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="container">
        <Header />
        { this.props.children }
      </div>
    );
  }
}
