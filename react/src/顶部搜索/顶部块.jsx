import React from 'react'
import 按钮 from './按钮'
import './顶部.css'

export default function 顶部块(类和标签) {
  let 列表 = []
  for (let 标签 in 类和标签) {
    列表.push(<按钮 key={标签} 标签={标签} 类={类和标签[标签][0]} />)
  }

  return (
    <div className='顶部块'>
      <form action=''>
        <div className='tag按钮'>{列表}</div>
        <input className='搜索栏' type="text" />
        <button className='上传搜索'>搜索</button>
      </form>
      <div className='设置'>
        <a href="">点击跳转至设定</a>
      </div>
    </div>
  )
}

