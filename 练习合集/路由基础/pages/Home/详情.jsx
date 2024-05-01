import React, { Component } from 'react'

export default class 详情 extends Component {
  render() {
    let {id,标题,内容}=this.props.location.state
    return (
      <ul style={{ paddingTop: '20px', borderTop: '1px solid rgb(238, 237, 237)' }}>
          <li>id:{id}</li>
          <li>标题:{标题}</li>
          <li>内容:{内容}</li>
      </ul>
    )
  }
}
