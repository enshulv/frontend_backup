import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

class Message extends Component {
    state = {
        content: [
            { id: '1', title: 'Message', content: 'I love you, China' },
            { id: '2', title: 'Message', content: 'I love you, mother' },
            { id: '3', title: 'Message', content: 'I love you, child' },
        ],
    }
    render() {
        let path = '/Home/Message/'
        let { content } = this.state
        return (
            <div>
                {content.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={{ pathname: path + item.id, state: item }}>
                                {'Click to display message ' + item.id}
                            </Link>
                        </li>
                    )
                })}
                <hr />  
            </div>
        );
    }
}

export default Message;