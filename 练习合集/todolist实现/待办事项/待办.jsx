import React, { Component } from 'react';
import './待办.css'
import 选中 from './选中'

class 待办 extends Component {
    render() {
        return (
            <div className='待办块'>
                <ul className='待办表'>
                    {this.props.输入.map((a) => { 
                        return <选中 key={a.id} {...a} {...this.props}/>
                     })}
                </ul>
            </div>
        );
    }
     }

export default 待办;