import React from 'react'
import './菜单.css'
import 菜单详情 from './菜单详情/菜单详情'

export default function 菜单(props) {
  const 判断 = props['点击']
  return (
    <div className={判断?'菜单栏':'菜单栏-隐藏'}>
      <div className='菜单内容'>
        <菜单详情/>
      </div>
    </div>
  )
}
