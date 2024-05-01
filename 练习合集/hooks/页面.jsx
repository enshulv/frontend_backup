import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Link, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import 路由 from './路由'
import 登录 from './登录'

export default function 页面() {
    const [状态, 更改状态] = useState(0)
    const [输入, 更改输入] = useState({ 用户名: null, 密码:null })
    const 历史 = useNavigate()

    const ref = useRef()
    const 用户名 = useRef()
    const 密码 = useRef()

    const 合集 = [
        { id: 1, 标题: '111', 内容: '11111' },
        { id: 2, 标题: '222', 内容: '22222' },
        { id: 3, 标题: '333', 内容: '33333' },
    ]

    const add = () => {
        更改状态(状态 + 1)
    }

    const 卸载 = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    const 展示 = () => {
        console.log(ref.current.value);
    }

    const 获取 = () => {
        输入.用户名=用户名.current.value
        输入.密码=密码.current.value
        更改输入({...输入})
        历史('oncl/password')
    }

    useEffect(() => {
        let id = setInterval(() => {
            更改状态(状态 => 状态 + 1)
        }, 20000)
        return () => {
            clearInterval(id)
        }
    }, [])
    return (
        <div>
            <h1>当前求和值为{状态}</h1>
            <button onClick={add}>点我+1</button>
            <button onClick={卸载}>卸载</button>
            <input type="text" ref={ref} />
            <button onClick={展示}>展示</button><br />
            <Link to={"oncl/1"}>点击展开1</Link><br />
            <Link to={"oncl/2"}>点击展开2</Link><br />
            <Link to={"oncl/3"}>点击展开3</Link><br />
            <input ref={用户名} type="text" placeholder='请输入账号' /><br />
            <input ref={密码} type="password" placeholder='请输入密码' /><br />
            <button onClick={获取}>确定</button>
            <Routes>
                <Route path="oncl/:id" element={<路由 合集={合集} />} />
                <Route path="oncl/password" element={<登录 {...输入}/>} />
                <Route path="" element={<Navigate to="oncl/1" />} />
            </Routes>
        </div>
    )
}
