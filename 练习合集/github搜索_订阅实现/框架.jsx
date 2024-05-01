import React, { Component } from 'react';
import 展示 from './展示/展示'
import 搜索 from './搜索/搜索'

class 框架 extends Component {
  render() {
    return (
      <div>
        <搜索/>
        <展示/>
      </div>
    );
  }
}

export default 框架;