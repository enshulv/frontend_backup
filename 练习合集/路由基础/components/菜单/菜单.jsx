import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './菜单.css'

export default class 菜单 extends Component {
  render() {
    let { 表名,类名 } = this.props
    return (
      <div className={类名}>
        {表名.map((a) => {
          let 内容=a.地址.replace(/.*\//,'')
          return (
            <NavLink key={a.id} activeClassName='点击' to={`/${a.地址}`}>{内容}</NavLink>
          )
        })}
      </div>
    )
  }
}
