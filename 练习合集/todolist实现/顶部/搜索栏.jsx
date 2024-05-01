import React, { Component } from 'react'
import './搜索栏.css'

export default class 搜索栏 extends Component {
  render() {
    return (
      <div className='搜索栏'>
        <input onKeyDown={this.props.添加事项} className='输入' type="text" placeholder='请输入你的任务名称，按回车键确认' />
      </div>
    )
  }
}
