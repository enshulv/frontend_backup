import { React, useState } from 'react'
import 搜索栏 from './搜索栏/搜索栏'
import 搜索内容 from './搜索内容/搜索内容'
import 标签 from '../../../config/db.text.json'
import './搜索.css'

export default function 搜索() {
  const 主进程 = window.main
  const 默认全选 = true
  const 语言 = JSON.parse(sessionStorage.getItem('语言'))

  const [已选中tag, set已选中tag] = useState(默认全选 ? Object.values(语言['按钮']).map((tarr) => { return tarr[0]; }) : [])
  const [tag值, set_tag值] = useState(0)

  const [搜索结果, set搜索结果] = useState(false)

  if(!搜索结果){
    set搜索结果(主进程.获取页面('画廊'))
  }

  const 传递项 = {
    搜索结果: 搜索结果,
    set搜索结果: set搜索结果,
    主进程:window.main,
    语言:语言,
    已选中tag:已选中tag,
    set已选中tag:set已选中tag,
    tag值:tag值,
    set_tag值:set_tag值,
    标签db:标签
  }

  return (
    <div className='搜索-主框'>
      <搜索栏 {...传递项}/>
      <搜索内容 {...传递项} />
    </div>
  )
}
