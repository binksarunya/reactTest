import React, { Fragment, Component } from 'react';

import './App.css';
import HelloApp from './HelloApp/HelloApp'


class App extends Component {
  render() {
    return (
      <Fragment key="App">
        <HelloApp message="This is message sent from App" />

      </Fragment>
    );
  }
}

export default App;
