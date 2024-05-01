import React, { Component } from 'react'
import About from '../../pages/About/About'
import Home from '../../pages/Home/Home'
import { Route, Redirect } from 'react-router-dom'

export default class 展示 extends Component {
  render() {
    return (
      <div className='展示'>
        <h1>
          <Route path="/About" component={About} />
          <Route path="/Home" component={Home} />
          <Redirect to='/About' />
        </h1>
      </div>
    )
  }
}
