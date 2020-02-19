import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "../components/dashboard.jsx";
import About from "../components/about.jsx";
import Exhibition from "../components/exhibition.jsx";
import LoginPage from './handleLogin.jsx';

export default class Login extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <LoginPage />
            </Route>
            <Route exact path='/home'>
              <Dashboard />
            </Route>
            <Route exact path='/exhibition'>
              <Exhibition />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}