import React, { Component } from 'react'
import './待办.css'

export default class 选中 extends Component {
  state = { 鼠标判断: false }

  render() {
    let { 名字, 选中, id,清除,更新勾选 } = this.props
    let { 鼠标判断 } = this.state
    return (
      <li onMouseOver={this.指针动作(true)} onMouseOut={this.指针动作(false)}>
        <label className='行'>
          <input type="checkbox" checked={选中} id={id} onChange={更新勾选(id)} />
          <span>{名字}</span>
        </label>
        <button className='按钮' onClick={清除(id)} style={{ display: 鼠标判断 ? 'block' : 'none' }}>清除</button>
      </li>
    )
  }

  指针动作 = (判断) => {
    return () => {
      this.setState({ 鼠标判断: 判断 })
    }
  }
}
