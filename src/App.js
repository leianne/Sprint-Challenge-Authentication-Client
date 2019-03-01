import React, { Component } from 'react';
import FormView from './Form/FormView';
import { NavLink, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={FormView}/>
      </div>
    );
  }
}

export default App;
