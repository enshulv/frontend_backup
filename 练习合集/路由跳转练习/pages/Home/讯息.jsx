import React, { Component } from 'react';
import qs from 'query-string'

class 讯息 extends Component {
    render() {
        let 参数 =qs.parse(this.props.location.search)
        return (
            <ul>
                <li>id:{参数.id}</li>
                <li>标题:{参数.标题}</li>
                <li>详情:{参数.内容}</li>
            </ul>
        );
    }
}

export default 讯息;