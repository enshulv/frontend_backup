import React, { Component } from 'react';
import 菜单 from './components/菜单/菜单'
import 展示 from './components/展示/展示'
import 头部 from './components/头部/头部'
import './框架.css'

class 框架 extends Component {
  render() {
    return (
      <div id='框架'>
        <头部 />
        <hr />
        <div className='内框'>
          <菜单 />
          <展示 />
        </div>
      </div>
    );
  }
}

export default 框架;