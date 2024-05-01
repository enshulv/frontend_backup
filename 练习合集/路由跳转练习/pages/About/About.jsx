import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import 图片 from './图片详情'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>关于</h1>
        <Link to="/关于/图片">
          <img src="https://wx2.sinaimg.cn/mw2000/ed59c63fly1h0qqmvpua9j20u011in0s.jpg" style={{'height':'300px'}} />
        </Link>
        <Route path="/关于/图片" component={图片}/>
      </div>
    )
  }
}
