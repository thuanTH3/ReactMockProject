import React, { Component } from "react";
import Login from "./src/auth/login.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix")
  .map(icon => Icons[icon]);

library.add(...iconList);

export default class App extends Component {
  render() {
    return <Login />
  }
}

