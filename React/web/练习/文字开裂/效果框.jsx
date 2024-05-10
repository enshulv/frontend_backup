import React from 'react'
import './效果框.css'

export default function 效果框(props) {
    const {输入,更新,状态} = props
    const{字符,变量} = 输入

    const 选中 = () => {
        let i = 状态
        i.forEach((a) => {
            if(a.字符 != 字符){
                a['变量']='item 未选中'
            }
        })
        更新([...i])
    }
    const 未选中 = () => {
        let i = 状态
        i.forEach((a) => {
            if(a.字符 != 字符){
                a['变量']='item'
            }
        })
        更新([...i])
    }

    return (
        <div className={变量} onMouseOver={选中} onMouseOut={未选中}>
            <div>{字符}</div>
            <div>{字符}</div>
            <a href="#">按这里{字符}</a>
        </div>
    )
}
