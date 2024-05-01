import React, { Component } from 'react'
import 搜索栏 from './顶部/搜索栏'
import 待办 from './待办事项/待办'
import 底部 from './底部/底部'
import './框架.css'

export default class 框架 extends Component {
  state = { 输入: [] }

  render() {
    let 状态 = this.state
    return (
      <div id='框架'>
        <搜索栏 添加事项={this.添加事项} />
        <待办 {...{ 清除: this.清除, 更新勾选: this.更新勾选 }} {...状态} />
        <底部 {...{ 清除选中: this.清除选中, 全选: this.全选 }} {...状态} />
      </div>
    )
  }

  添加事项 = (a) => {
    if (a.key == 'Enter') {
      let 值 = a.target.value
      if (值 == '') {
        alert('输入不能为空')
        return false
      }
      let { 输入 } = this.state
      let 添加 = { id: 输入.length + 1, 名字: 值, 选中: false }
      this.setState({ 输入: [...输入, 添加] })
      a.target.value = ''
    }
  }

  清除 = (id) => {
    return () => {
      let { 输入 } = this.state
      if(window.confirm('确定删除吗')){}
      else{return false}
      let 更新 = 输入.filter(b => { if (b.id != id) return b })
      this.setState({ 输入: 更新 })
    }
  }

  更新勾选 = (id) => {
    return (a) => {
      let { 输入 } = this.state
      let 更新 = 输入.map(b => { if (b.id == id) b.选中 = a.target.checked; return b })
      this.setState({ 输入: 更新 })
    }
  }

  清除选中 = () => {
    let { 输入 } = this.state
    let 判断 = 输入.filter((a) => { if (a.选中 == false) return a })
    this.setState({ 输入: 判断 })
  }

  全选 = (a) => {
    let { 输入 } = this.state
    let 更新 = 输入.map(b => { b.选中 = a.target.checked; return b })
    this.setState({ 输入: 更新 })
  }
}
