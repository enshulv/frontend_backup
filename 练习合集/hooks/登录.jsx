import React from 'react'

export default function 登录(a) {
    let { 用户名, 密码 } = a
    return (
        <div>
            <h1>注册成功！</h1>
            <h2>账户名为：{用户名}</h2>
            <h2>密码为：{密码}</h2>
        </div>
    )
}
