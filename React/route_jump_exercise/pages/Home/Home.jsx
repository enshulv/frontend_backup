import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Details from './Details';
import News from './News';
import './SecondaryMenu.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className='secondary'>
          <NavLink to="/home/details" activeClassName='clicked'>Details</NavLink>
          <NavLink to="/home/news" activeClassName='clicked'>News</NavLink>
        </div>
        <div>
          <Route path="/home/details" component={Details} />
          <Route path="/home/news" component={News} />
          <Redirect to="/home/details"/>
        </div>
      </div>
    );
  }
}
