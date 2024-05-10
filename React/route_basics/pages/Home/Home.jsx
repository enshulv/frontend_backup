import React, { Component } from 'react'
import Menu from '../../components/Menu/Menu'
import News from './News'
import Message from './Message'
import Details from './Details'
import { Route, Redirect } from 'react-router-dom'
import './SubMenu.css'

export default class Home extends Component {
  state = {
    table: [
      {id:'1',path:'Home/News', component:News}, 
      {id:'2',path:'Home/Message', component:Message},
    ],
    className: 'SubMenu',
  }
  render() {
    let { table } = this.state
    return (
      <div style={{ fontSize: '15px' }}>
        <h1>Home</h1>
        <Menu {...this.state} />
        <ul>
          {table.map((item) => {
            return (
              <Route key={item.id} path={'/' + item.path} component={item.component} />
            )
          })}
          <Redirect to={table[0].path} />
        </ul>
        <Route path='/Home/Message/1' component={Details}/>
        <Route path='/Home/Message/2' component={Details}/>
        <Route path='/Home/Message/3' component={Details}/>
      </div>
    )
  }
}