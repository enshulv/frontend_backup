import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './头部.css'

class 头部 extends Component {
  render() {
    let {goBack, goForward} = this.props.history
    return (
      <div className='头部'>
        <h1>这是一个路由的测试页面</h1>
        <button onClick={this.历史操作(goForward)}>前进</button>
        <button onClick={this.历史操作(goBack)}>后退</button>
      </div>
    )
  }

  历史操作 = (操作) => {
    return () => {
      操作()
    }
  }
}

export default withRouter(头部)