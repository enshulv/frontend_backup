import {React,useState} from 'react'
import './菜单详情.css'
import 头像 from './1.png'

export default function 菜单详情() {
    const [登录状态,set登录状态] = useState(false)

    return (
        <div className='菜单详情'>
            <div className='头像'>
                <img src={头像} />
            </div>
            <div className='用户名'>这里是用户名</div>
        </div>
    )
}
