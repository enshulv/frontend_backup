import React, { Component } from 'react'
import 菜单 from '../../components/菜单/菜单'
import 新闻 from './新闻'
import 讯息 from './讯息'
import 详情 from './详情'
import { Route, Redirect } from 'react-router-dom'
import './二级菜单.css'

export default class Home extends Component {
  state = {
    表名: [
      {id:'1',地址:'Home/新闻', 组件:新闻}, 
      {id:'2',地址:'Home/讯息', 组件:讯息},
    ],
    类名: '二级',
  }
  render() {
    let { 表名} = this.state
    return (
      <div style={{ fontSize: '15px' }}>
        <h1>Home</h1>
        <菜单 {...this.state} />
        <ul>
          {表名.map((a) => {
            return (
              <Route key={a.id} path={'/' + a.地址} component={a.组件} />
            )
          })}
          <Redirect to={表名[0].地址} />
        </ul>
        <Route path='/Home/讯息/1' component={详情}/>
        <Route path='/Home/讯息/2' component={详情}/>
        <Route path='/Home/讯息/3' component={详情}/>
      </div>
    )
  }
}
