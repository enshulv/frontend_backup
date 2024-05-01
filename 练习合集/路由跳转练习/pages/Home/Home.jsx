import React, { Component } from 'react'
import { NavLink, Route,Redirect } from 'react-router-dom'
import 详情 from './详情'
import 新闻 from './新闻'
import './二级菜单.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>家</h1>
        <div className='二级'>
          <NavLink to="/家/详情" activeClassName='点击'>详情</NavLink>
          <NavLink to="/家/新闻" activeClassName='点击'>新闻</NavLink>
        </div>
        <div>
          <Route path="/家/详情" component={详情} />
          <Route path="/家/新闻" component={新闻} />
          <Redirect to="/家/详情"/>
        </div>
      </div>
    )
  }
}
