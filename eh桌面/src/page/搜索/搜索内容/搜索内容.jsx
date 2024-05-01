import { React, useState } from 'react'
import './搜索内容.css'
import 图片 from './1.jpg'

export default function 搜索内容(porps) {
  const { 搜索结果, set搜索结果, 主进程, 语言, set已选中tag, set_tag值, 按钮,标签db } = porps
  const { 标签: 标签翻译, 列表, 平铺, pages } = 语言
  const [展示项, set展示项] = useState(搜索结果)
  const [样式, set样式] = useState(true)

  const 切换按钮 = () => {
    set样式(!样式)
  }

  const 点击tag = (a) => {
    const 当前tag = a.target.textContent
    set已选中tag([当前tag])
    set_tag值(1023 - 按钮[当前tag][1])
  }

  const 点击上传者 = (a) => {
    const 搜索框 = document.getElementsByClassName('搜索框')[0]
    搜索框.value = `uploader:${a.target.textContent}`
  }

  const 转为对象 = (a) => {
    const 对象 = {}
    a.split(';').forEach((b) => {
      const 键值 = b.split(':')
      键值[0] = 键值[0] == 'background-position' ? 'backgroundPosition' : 键值[0]
      对象[键值[0]] = 键值[1]
    })
    return 对象
  }

  const 处理标签 = function (a) {
    const 字典 = {}
    a.forEach((b) => {
      const 大标签 = b.split(':')[0] == ''?'temp':b.split(':')[0]
      const 子标签 = b.split(':')[1]
      标签db['']
    })
  }

  const 加载平铺 = (a, 懒加载) => {
    return (
      <div className='内容框' key={a['名字']}>
        <div className='图片框'>
          <img src={图片} loading={懒加载 ? 'lazy' : 'eager'} />
        </div>
        <div className='分类' onClick={点击tag} style={{ 'backgroundColor': 标签翻译[a['tag']][1] }}>{标签翻译[a['tag']][0]}</div>
        <div className='评分_居中'>
          <div className='评分_' style={转为对象(a['评分'])}>star</div>
        </div>
        <div className='名字'>{a['名字']}</div>
      </div>
    )
  }

  const 加载列表 = (a, 懒加载) => {
    return (
      <div className='内容框_' key={a['名字']}>
        <div className='图片框_'>
          <img src={图片} loading={懒加载 ? 'lazy' : 'eager'} />
        </div>
        <ul className='中间框'>
          <li className='分类_' onClick={点击tag} style={{ 'backgroundColor': 标签翻译[a['tag']][1] }}>{标签翻译[a['tag']][0]}</li>
          <li className='时间'>{a['上传时间']}</li>
          <li className='评分_居中'>
            <div className='评分' style={转为对象(a['评分'])}>star</div>
          </li>
          <li className='上传者' onClick={点击上传者}>{a['上传者']['name']}</li>
          <li>{a['页数'].replace('pages', pages)}</li>
          <li className='种子'>
            <div className={a['种子']['种子'] ? '种子_有' : '种子_无'}>seed</div>
          </li>
        </ul>
        <div className='右框'>
          <div className='名字_'>{a['名字']}</div>
          <div className='标签'>测试</div>
        </div>
      </div>
    )
  }

  return (
    <div className='搜索内容'>
      <label className='样式切换'>
        <span className='平铺'>{平铺}</span>
        <input type="checkbox" className='切换按钮' onClick={切换按钮} defaultChecked={样式} />
        <span className='列表'>{列表}</span>
      </label>
      <div className={样式 ? '展示框_' : '展示框'}>
        {展示项.map((a, i) => {
          const 懒加载 = i < 10 ? false : true
          const 加载格式 = 样式 ? 加载列表(a, 懒加载) : 加载平铺(a, 懒加载)
          return 加载格式
        })}
      </div>
    </div>
  )
}
