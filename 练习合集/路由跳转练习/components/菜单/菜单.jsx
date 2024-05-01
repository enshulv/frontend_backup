import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './菜单.css'

class 菜单 extends Component {
  render() {
    return (
      <div className='菜单'>
        <NavLink to="/关于" activeClassName='点击'>关于</NavLink>
        <NavLink to="/家" activeClassName='点击'>家</NavLink>
      </div>
    );
  }
}

export default 菜单;