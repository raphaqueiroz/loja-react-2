import React, { Component } from 'react';
import { GlobalState } from './contexts/GlobalState';
import { Router } from './Router/Router';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <Router/>
      </GlobalState>
    );
  }
}

export default App;
