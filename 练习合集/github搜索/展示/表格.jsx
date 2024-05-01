import React, { Component } from 'react';
import './展示.css'

class 表格 extends Component {
    render() {
        let {avatar_url,login,html_url} = this.props
        return (
            <li>
                <a href={html_url} target='_blank'><img src={avatar_url} /></a>
                <br/>
                <span>{login}</span>
            </li>
        );
    }
}

export default 表格;