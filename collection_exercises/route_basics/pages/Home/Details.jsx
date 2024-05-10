import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    let {id, title, content} = this.props.location.state
    return (
      <ul style={{ paddingTop: '20px', borderTop: '1px solid rgb(238, 237, 237)' }}>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{content}</li>
      </ul>
    )
  }
}