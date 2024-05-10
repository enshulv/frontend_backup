import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <NavLink to="/about" activeClassName='active'>About</NavLink>
        <NavLink to="/home" activeClassName='active'>Home</NavLink>
      </div>
    );
  }
}

export default Menu;
