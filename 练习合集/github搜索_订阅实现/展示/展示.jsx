import React, { Component } from 'react'
import pubsub from 'pubsub-js'
import 表格 from './表格'
import './展示.css'

export default class 展示 extends Component {
  state={展示内容:[],加载:<h1>欢迎，请输入用户名查找</h1>}

  componentDidMount(){
    this.token=pubsub.subscribe('状态',(_,data)=>{
      this.setState(data)
    })
  }

  componentWillUnmount(){
    pubsub.unsubscribe(this.token)
  }

  render() {
    let { 展示内容: 内容, 加载 } = this.state
    return (
      <div>
        <ul className='表'>
          {内容.length == 0 ? 加载 :
          内容.map(a => { return <表格 key={a.id} {...a} /> })
          }
        </ul>
      </div>
    )
  }
}
