import React, { Component } from "react";
import Sidebar from "./sidebar.jsx";
import Navigation from "./navigation-bar.jsx";

export default class About extends Component {
  render() {
    return (
      <div className='container'>
      <div className='container-wrap'>
        <Sidebar></Sidebar>
        <div className='content'>
          <Navigation></Navigation>
          <div style={{height: '100vh'}}></div>
        </div>
      </div>
    </div>
    )
  }
}
