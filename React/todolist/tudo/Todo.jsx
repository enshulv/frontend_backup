import React, { Component } from 'react';
import './Todo.css'
import Selected from './Selected'

class Todo extends Component {
    render() {
        return (
            <div className='todo-block'>
                <ul className='todo-list'>
                    {this.props.input.map((a) => { 
                        return <Selected key={a.id} {...a} {...this.props}/>
                     })}
                </ul>
            </div>
        );
    }
}

export default Todo;
