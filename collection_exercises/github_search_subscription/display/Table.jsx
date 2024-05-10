import React, { Component } from 'react';
import './Display.css'

class Table extends Component {
    render() {
        let { avatar_url, login, html_url } = this.props
        return (
            <li>
                <a href={html_url} target='_blank' rel='noopener noreferrer'><img src={avatar_url} alt={`Avatar of ${login}`} /></a>
                <br/>
                <span>{login}</span>
            </li>
        );
    }
}

export default Table;
