import React, { Component } from 'react'
import 表格 from './表格'
import './展示.css'

export default class 展示 extends Component {
  render() {
    let { 展示内容: 内容, 加载 } = this.props
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
