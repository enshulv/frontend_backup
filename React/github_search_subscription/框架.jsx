import React, { Component } from 'react';
import Display from './display/Display'
import Search from './search/Search'

class Frame extends Component {
  render() {
    return (
      <div>
        <Search />
        <Display />
      </div>
    );
  }
}

export default Frame;
