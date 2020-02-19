import React, { Component } from 'react';
import Avatar from './avatar.jsx';
import Info from './info.jsx';

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-container'>
          <Avatar></Avatar>
          <Info></Info>
        </div>
      </div>
    );
  }
}
