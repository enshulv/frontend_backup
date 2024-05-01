import React, { useEffect, useState} from 'react'
import { useNavigate,useParams} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import 展示块 from '../内容展示/展示块'
import 页码条 from './页码'
import 请求 from '../非组件/请求数据'
import './页码.css'

export default function 页码块(props) {
  const 历史 = useNavigate()
  const {pages:输入页} = useParams()

  const { 总页, 前七页 } = props
  const [页码, set页码] = useState(前七页)
  const [当前页, set当前页] = useState(1)
  const [内容,set内容] = useState([])

  const 参数 = { 页码: 页码, set页码: set页码, 总页: 总页, 当前页: 当前页, set当前页: set当前页}

  useEffect(() => {
    // if (输入页 != 当前页) {
    //   let 更新表 = []
    //   let i, l
    //   if (输入页 > 总页 && 总页 > 7) {
    //     i = 总页 - 7
    //     l = 总页
    //     历史(`/page/${总页}`)
    //   } else if(输入页<=7 && 总页 < 7){
    //       i =1
    //       l = 总页
    //       历史(`/page/${1}`)
    //     }else{
    //       i = 输入页 - 7
    //       l = Number(输入页)
    //   }
    //   set当前页(l)
    //   for (i; i <= l; i++) {
    //     更新表.push(i)
    //   }
    //   set页码(更新表)
    // }
    if (内容.length == 0)  请求(当前页,set内容)
  })

  return (
    <div>
      <页码条 {...参数} />
      <ul className='展示列表'>
      {内容.map((a) => { 
        return <li key={a.gid}><展示块 {...a}/></li>
       })}
      </ul>
      <页码条 {...参数} />
      <Outlet />
    </div>
  )
}
