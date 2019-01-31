/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import AboutPage from '../components/AboutPage';
import Demo from '../components/MoodOptions';
import FuelSavingsPage from '../components/containers/FuelSavingsPage';
// import HomePage from './Main';
import NotFoundPage from '../components/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
          {' | '}
          {/* <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink> */}
        </div>
        <Switch>
          <Route exact path="/" component={Demo} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/demo" component={Demo} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.element,
};

export default hot(module)(App);
