import { React, useState, useEffect } from 'react'
import 小框 from './小框'
import './css/第一页.css'

export default function 第一页() {
  // useEffect(() => {
  //   document.addEventListener('scroll', 判断)
  //   return () => {
  //     document.removeEventListener('scroll', 判断)
  //   }
  // })

  let l_1 = []
  let 窗口 = document.documentElement.clientHeight / 300
  let 数量 = Math.trunc(窗口 + 1) * 3
  for (let i = 0; i < 数量; i++) {
    l_1.push(<小框 key={l_1.length} />)
  }
  const [list, setlist] = useState(l_1)

  const 判断 = () => {
    let { scrollHeight: 高度, scrollTop: 滚动, clientHeight: 窗口 } = document.documentElement
    if (滚动 + 窗口 == 高度) {
      for (let i = 0; i < 3; i++)添加()
    } else if (滚动 >= 窗口) {
      // console.log(滚动);
    }
  }

  const 添加 = () => {
    let a = list
    a.push(<小框 key={a.length} />)
    setlist([...a])
  }

  const 减少 = () => {
    let a = list
    a.pop()
    setlist([...a])
  }

  return (
    <div className='最外层'>
      <div className='第一个'>
        <h1>欢迎来到，展示页面</h1>
      </div>
      <div className='顶层'>
        <input type="button" value="点击添加内容" onClick={添加} />&nbsp;
        <input type="button" value="点击减少内容" onClick={减少} />
      </div>
      <div className='外框'>
        {list}
      </div>
      <div className='遮挡'>
        转到下一页啦！
      </div>
    </div>
  )
}
