import { React, useState } from 'react'
import './搜索栏.css'

export default function 搜索栏(porps) {
  const {已选中tag,set已选中tag,tag值,set_tag值,语言,标签db:标签 } = porps
  const { 搜索, 按钮, 全选, 非全选,标签:tag标签 } = 语言
  const tag = Object.values(按钮)
  const tag_背景 = Object.values(按钮).map((a) => {
    const 表 = []
    Object.values(tag标签).forEach((b) => {
      if(b[0] == a[0]){
        表.push(b[0],b[1])
      }
    })
    return 表
  })
  const [搜索提示, set搜索提示] = useState([])

  const 数值 = () => {
    const 结果 = tag.map((a) => {
      if (已选中tag.includes(a[0])) {
        return a[1]
      } else { return 0 }
    }).reduce((t, num) => { return t + num })
    return 结果
  }

  const 选中 = (e) => {
    const tag标签 = e.target.nextSibling.innerHTML
    if (已选中tag.includes(tag标签)) {
      已选中tag.remove(tag标签)
      set_tag值(数值())
    } else {
      已选中tag.push(tag标签)
      set_tag值(数值())
    }
  }

  const 全选事件 = (e) => {
    const 目前状态 = e.target.nextSibling.innerHTML
    if (目前状态 == 非全选) {
      set已选中tag([])
      set_tag值(0)
    } else {
      set已选中tag(Object.values(按钮).map((tarr) => { return tarr[0]; }))
      set_tag值(1023)
    }
  }

  const 点击搜索 = () => {
    if (已选中tag.length == 0) {
      set已选中tag(Object.values(按钮).map((tarr) => { return tarr[0]; }))
      set_tag值(1023)
    }
    set搜索提示([])
  }

  const 查询 = (内容) => {
    const 查询结果 = []
    const 初步查询 = {}
    标签['data'].forEach((a) => {
      const 大标签数据 = a['data']
      for (let b in 大标签数据) {
        const 中文名 = 大标签数据[b]['name']
        if (b.match(内容) != null || 中文名.match(内容) != null) {
          const 英文 = `${a['namespace']}:${b}`
          // const 中文 =大标签数据[b]['name']
          const 中文 = `${a['frontMatters']['name']}:${大标签数据[b]['name']}`
          初步查询[英文] = 中文
        }
      }
    })
    for (let c of Object.keys(初步查询).sort().slice(0, 30)) {
      查询结果.push({ [c]: 初步查询[c] })
    }
    return 查询结果
  }

  const 输入 = (a) => {
    const 获取 = a.target.value
    const 正则 = 获取.split(/\s/)
    const 内容 = 正则[正则.length - 1]
    if (内容 != '') {
      set搜索提示(查询(内容))
    } else {
      set搜索提示([])
    }
  }

  const 重查标签 = (a) => {
    const 获取 = a.target.value
    const 正则 = 获取.split(/\s/)
    const 内容 = 正则[正则.length - 1]
    if (内容 != '' && 搜索提示.length == 0) {
      set搜索提示(查询(内容))
    }
  }

  const 标签搜索 = () => {
    const 标签 = document.getElementsByClassName('提示_英文')[0]
    const 标签文本 = 标签.textContent
    const 搜索框 = document.getElementsByClassName('搜索框')[0]
    const 搜索文本 = 搜索框.value
    const 正则 = 标签文本.split(/:/)
    const 搜索文本_正则 = 搜索文本.split(/\s/)
    正则[1] = `:"${正则[1]}$"`
    const 搜索项 = 正则[0][0] + 正则[1]
    搜索文本_正则[搜索文本_正则.length - 1] = 搜索项
    搜索框.value = 搜索文本_正则.join(' ')
    set搜索提示([])
  }

  return (
    <div className='搜索'>
      <div className='搜索块'>
        <input type='search' className='搜索框' onChange={输入} onClick={重查标签} />
        <button className='按下搜索' onClick={点击搜索}>{搜索}</button>
      </div>
      <ul className={搜索提示.length != 0 ? '提示块' : '提示块_隐藏'}>
        <div className='提示_浮动'>
          {搜索提示.map((a) => {
            const 英文处理 = Object.keys(a)[0].split(/:/)
            英文处理[0] = 英文处理[0][0]
            const 英文 = 英文处理.join(':')
            const 中文 = a[Object.keys(a)]
            return (
              <div className='提示_内容' key={英文} onClick={标签搜索}>
                <li>
                  <div className='提示_英文'>{英文}</div>
                  <div className='提示_中文'>{中文}</div>
                </li>
              </div>
            )
          })}
        </div>
      </ul>
      <div className='标签块'>
        {tag_背景.map((a) => {
          
          return (
            <div className='tag块' key={a[0]}>
              <label style={{backgroundColor:a[1],opacity:已选中tag.includes(a[0]) ? 1:0.7}}>
                <input type='checkbox' onClick={选中} />
                <span>{a[0]}</span>
              </label>
            </div>
          )
        })}
        <label className='全选'>
          <input type="checkbox" onClick={全选事件} />
          <span>{已选中tag.length != 10 ? 全选 : 非全选}</span>
        </label>
      </div>
    </div>
  )
}
