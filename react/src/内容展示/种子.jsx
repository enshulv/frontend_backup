import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function 种子() {
  const 历史 = useNavigate()
  const { state: 种子 } = useLocation()

  const 判断 = (a) => {
    if (a.target.className == '遮罩') 历史(-1)
  }

  useEffect(() => {
    document.addEventListener('click', 判断)
    return () => {
      document.removeEventListener('click', 判断)
    }
  })

  return (
    <div className='遮罩'>
      <table cellSpacing="0" className='种子页面'>
        <tr>
          <th>id</th>
          <th>名字</th>
          <th>上传者</th>
          <th>文件大小</th>
          <th>上传时间</th>
        </tr>
        {种子.map((a) => {
          const { id, name, hash, addedstr: 时间戳, fsizestr: 大小, uploader: 上传者 } = a
          return (
            <tr className='种子内容'>
              <td>{id}</td>
              <td><a href={hash}>{name}</a></td>
              <td>{上传者}</td>
              <td>{大小}</td>
              <td>{时间戳}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
