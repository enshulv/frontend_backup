import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import img from '../非组件/img.jpg'
import { 上下文 } from '../框架'
import './展示.css'

export default function 左侧(props) {
  const { gid, thumb: 封面, token, posted: 时间戳, category: tag, uploader: 上传者, filesize, filecount, rating: 评分, torrents } = props
  const 接收标签 = useContext(上下文)
  const 种子数 = torrents.length

  let 标签, 类名
  for (let i in 接收标签) {
    if (接收标签[i][1] == tag.toLowerCase()) {
      标签 = i
      类名 = 接收标签[i][0]
    }
  }

  const 展示行 = [
    { '画廊ID:': gid },
    { 'Token:': token },
    { '时间:': new Date(时间戳 * 1000).toLocaleString() },
    { '可见:': '是' },
    { '大小:': `${(filesize / 1044480).toFixed(2)}Mb` },
    { '长度:': `${filecount}页` },
    { '种子:': 种子数 == 0 ? 0 : 种子数 },
    { '评分:': 评分 },
  ]

  return (
    <div className='左侧'>
      <img src={img} className='img'/>
      <div className='左侧_内容'>
        <div className={`${类名} tag`}>{标签}</div>
        <a className='上传者' href="">{上传者}</a>
        {展示行.map((a) => {
          let 标题 = Object.keys(a)[0]
          let 内容 = Object.values(a)[0]
          let 种子 = 标题 == '种子:' && 内容 != 0 ? true : false
          return (
            <div key={标题} className="介绍">
              <span className='标题'>{标题}</span>
              <span className='值'>{
                种子 ? <Link to={`${gid}`} state={torrents}>{内容}</Link> : 内容
              }</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
