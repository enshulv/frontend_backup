import {React,useState} from 'react'
import { BiMenu } from 'react-icons/bi'
import { BiX } from 'react-icons/bi'
import './App.css'

export default function App() {
  const [点击,set点击] = useState()

  const 判断 = () => {
    set点击(true)
  }

  return (
    <div className='外框'>
      <div className='标题'>
        <input type="checkbox" className='菜单' id='菜单-' />
        <label htmlFor="菜单-">
        </label>
      </div>
    </div>
  )
}
