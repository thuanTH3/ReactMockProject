import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Dashboard from "./dashboard.jsx";
import About from "./about.jsx";
import Exhibition from "./exhibition.jsx";

export default class Navigation extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <i
          className='fab fa-angrycreative fa-4x'
          style={{ padding: "0 50px" }}></i>
        <ul className='sections'>
          <li>
            <Link className='nav-link' to='/home'>
              Home
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/search' style={{pointerEvents: 'none'}}>
              Search
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/exhibition'>
              Exhibition
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/art' style={{pointerEvents: 'none'}}>
              Art
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/edits' style={{pointerEvents: 'none'}}>
              Edits
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
