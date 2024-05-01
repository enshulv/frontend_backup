import React from 'react'
import { useParams } from 'react-router-dom'

export default function 路由(a) {
  const param = useParams()
  const 结果=a.合集.find((b) => {
    if(b.id == param.id){return b}
  })
  return (
    <ul>
      <li>id：{结果.id}</li>
      <li>标题：{结果.标题}</li>
      <li>名字：{结果.内容}</li>
    </ul>
  )
}
