import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import About from '../../pages/About/About'
import Home from '../../pages/Home/Home'
import './Display.css'

class Display extends Component {
  render() {
    return (
      <div className='display'>
        <Route path="/about" component={About}/>
        <Route path="/home" component={Home}/>
        <Redirect to="/about"/>
      </div>
    );
  }
}

export default Display;
