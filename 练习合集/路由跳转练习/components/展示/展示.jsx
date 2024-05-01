import React, { Component } from 'react';
import { Route,Redirect } from 'react-router-dom'
import 关于 from '../../pages/About/About'
import 家 from '../../pages/Home/Home'
import './展示.css'

class 展示 extends Component {
  render() {
    return (
      <div className='展示'>
        <Route path="/关于" component={关于}/>
        <Route path="/家" component={家}/>
        <Redirect to="/关于"/>
      </div>
    );
  }
}

export default 展示;