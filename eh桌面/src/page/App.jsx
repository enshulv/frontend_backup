import { React, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import 标题 from './标题栏/标题'
import 索引 from './索引栏/索引'
import 搜索 from './搜索/搜索'
import 菜单 from './菜单/菜单'
import './App.css'
import 语言包 from '../../config/langusge.json'

export default function App() {
  const [内容, set内容] = useState([['/search', '搜索'],])
  const [语言文件, set语言文件] = useState('zh')
  const [点击, set点击] = useState(true)

  sessionStorage.setItem('语言', JSON.stringify(语言包[语言文件]))

  Array.prototype.remove = function (str) {
    this.forEach((a, i) => {
      if (a == str) {
        this.splice(i, 1)
      }
    })
  }

  // 看漫画的页面到时候直接用html原生就行了，imgtag然后点击翻页，没难度
  return (
    <div className='大外框'>
      <标题 />
      <菜单 点击={点击} />
      <div className={点击 ? '非标题-菜单' : '非标题'}>
        <索引 {...{ 索引项: [...内容], 点击: 点击, set点击: set点击 }} />
        <Routes>
          <Route path="/search" element={<搜索 />} />
          <Route path='/' element={<Navigate to="/search" />} />
        </Routes>
      </div>
    </div>
  )
}
