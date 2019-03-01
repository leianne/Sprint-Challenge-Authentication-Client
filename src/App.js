import React, { Component } from 'react';
import FormView from './Form/FormView';
import JokesView from './Jokes/JokesView';
import { NavLink, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {localStorage.getItem('jwt') ? '' : <NavLink className='navlink' to='/login' component={FormView}>Login</NavLink>}
          <NavLink className='navlink' to='/jokes' component={JokesView}>Jokes</NavLink>
        </header>
        <Route path='/login' component={FormView}/>
        <Route path='/jokes' component={JokesView}/>

      </div>
    );
  }
}

export default App;
