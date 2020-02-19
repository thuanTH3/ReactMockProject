import React, { Component } from "react";
import Sidebar from "./sidebar.jsx";
import Intro from "./intro.jsx";
import Navigation from "./navigation-bar.jsx";

export default class Dashboard extends Component {
  render() {
    return (
      <div className='container'>
        <div className='container-wrap'>
          <Sidebar></Sidebar>
          <div className='content'>
            <Navigation></Navigation>
            <Intro />
          </div>
        </div>
      </div>
    );
  }
}
