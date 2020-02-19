import React, { Component } from "react";
import Sidebar from "./sidebar.jsx";
import Grid from "./grid.jsx";
import Navigation from "./navigation-bar.jsx";

export default class Exhibition extends Component {
  render() {
    return (
      <div className='container'>
        <div className='container-wrap'>
          <Sidebar></Sidebar>
          <div className='content'>
            <Navigation></Navigation>
            <Grid />
          </div>
        </div>
      </div>
    );
  }
}
