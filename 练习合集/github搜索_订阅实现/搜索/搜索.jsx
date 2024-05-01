import React, { Component } from 'react'
import axios from 'axios'
import pubsub from 'pubsub-js'
import './搜索.css'

export default class 搜索 extends Component {
    render() {
        return (
            <div className='搜索'>
                <div className='搜索块'>
                    <h2>搜索github用户</h2>
                    <input ref={a => { this.输入 = a }} type="text" placeholder='输入用户名查找' onKeyDown={(a) => {if(a.key == 'Enter'){this.限制频率()}}}/>
                    <button onClick={this.限制频率}>搜索</button>
                </div>
            </div>
        )
    }

    限制频率 = () => {
        // 连续结构赋值，引用就是加进花括号里，重命名就是直接写
        let { 输入: { value: 内容 }} = this
        setTimeout(() => {
            this.查找(内容)
        }, 1000)
    }

      
  查找 = (内容) => {
    let 正则 = /[\u4e00-\u9fa5]+/
    if (正则.test(内容) || 内容 == '') {
      alert('请输入正确的内容(只能为英文)')
    }
    else {
      pubsub.publish('状态',{展示内容:[],加载:<h1>查询中...</h1>})
      let url = `https://api.github.com/search/users?q=${内容}`
      axios.get(url).then(
        成功 => {
            let {data:{items}} = 成功
            pubsub.publish('状态',{展示内容:items})
         },
        失败 => { 
            let 更新={加载:<h1 style={{color:'red'}}>请求失败：{失败.message}</h1>}
            pubsub.publish('状态',更新)
         }
      )
    }
  }
}
