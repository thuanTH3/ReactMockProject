import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button onClick={this.props.buttonClick} className={this.props.buttonType}><span>{this.props.name}</span></Button>
    );
  }
}
