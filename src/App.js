import React, { Component } from 'react';
import FormView from './Form/FormView';
import JokesView from './Jokes/JokesView';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';

class App extends Component {

  logOut = e => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        <header>
          {localStorage.getItem('jwt') ? <NavLink className='navlink' to='/login' onClick={e => this.logOut(e)} component={FormView}>Log Out</NavLink> : <NavLink className='navlink' to='/login' component={FormView}>Login</NavLink>}
          <NavLink className='navlink' to='/jokes' component={JokesView}>Jokes</NavLink>
        </header>
        <Route path='/login' component={FormView}/>
        <Route path='/jokes' component={JokesView}/>

      </div>
    );
  }
}

export default withRouter(App);
