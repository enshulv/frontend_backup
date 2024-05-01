import React, { Component } from 'react';

class 详情 extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/家/新闻')
    }, 3000)
  }

  render() {
    return (
      <ul>
        <li>详情1</li>
        <li>详情2</li>
        <li>详情3</li>
      </ul>
    );
  }
}

export default 详情;