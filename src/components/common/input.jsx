import React, { Component } from "react";

export default class Inputs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className='base-input' type={this.props.type} placeholder={this.props.placeholder}/>
    );
  }
}
