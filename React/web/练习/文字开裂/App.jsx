import {React,useState} from 'react'
import 效果框 from './效果框'
import './App.css'

export default function App() {
  const [状态,set状态] = useState(
    [
      {字符:'点赞',变量:'item'},
      {字符:'投币',变量:'item'},
      {字符:'收藏',变量:'item'},
    ]
  )
  
  return (
    <div className='外框'>
      {状态.map((a) => {
        return <效果框 输入={a} 更新={set状态} 状态={状态}/>
      })}
    </div>
  )
}
