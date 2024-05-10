import React, { Component } from 'react';
import Menu from './components/Menu/Menu'
import Display from './components/Display/Display'

class Framework extends Component {
  state = {
    tableName: [
      { id: '1', address: 'About' },
      { id: '2', address: 'Home' },
    ], 
    className: 'Menu'
  }
  render() {
    return (
      <div style={{ margin: '0px 20%' }}>
        <h1>This is a routing demo</h1>
        <div style={{ display: 'flex', borderTop: '1px solid rgb(189, 189, 189)' }}>
          <Menu {...this.state} />
          <Display />
        </div>
      </div>
    );
  }
}

export default Framework;