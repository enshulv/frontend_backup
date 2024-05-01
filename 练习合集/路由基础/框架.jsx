import React, { Component } from 'react';
import 菜单 from './components/菜单/菜单'
import 展示 from './components/展示/展示'

class 框架 extends Component {
  state = {
    表名: [
      { id: '1', 地址: 'About' },
      { id: '2', 地址: 'Home' },
    ], 
    类名: '菜单'
  }
  render() {
    return (
      <div style={{ margin: '0px 20%' }}>
        <h1>这是一个路由demo</h1>
        <div style={{ display: 'flex', borderTop: '1px solid rgb(189, 189, 189)' }}>
          <菜单 {...this.state} />
          <展示 />
        </div>
      </div>
    );
  }
}

export default 框架;