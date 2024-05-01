import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom'


class 讯息 extends Component {
    state = {
        内容: [
            { id: '1', 标题: '讯息', 内容: '我爱你，中国' },
            { id: '2', 标题: '讯息', 内容: '我爱你，母亲' },
            { id: '3', 标题: '讯息', 内容: '我爱你，孩子' },
        ],
    }
    render() {
        let 地址 = '/Home/讯息/'
        let { 内容 } = this.state
        return (
            <div>
                {内容.map((a) => {
                    return (
                        <li key={a.id}>
                            <Link to={{ pathname: 地址 + a.id, state: a }}>
                            {'点击展示讯息' + a.id}
                        </Link>
                        </li>
                    )
                })}
                <hr />  
            </div>
        );
    }
}

export default 讯息;