import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import Display from './components/display/Display';
import Header from './components/header/Header';
import './Framework.css';

class Framework extends Component {
  render() {
    return (
      <div id='framework'>
        <Header />
        <hr />
        <div className='inner-frame'>
          <Menu />
          <Display />
        </div>
      </div>
    );
  }
}

export default Framework;
