import React, { Component } from 'react'
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
        let { 输入: { value: 内容 }, props: { 查找 } } = this
        setTimeout(() => {
            查找(内容)
        }, 1000)
    }
}
