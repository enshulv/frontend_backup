import React, { Component } from 'react';

class Details extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/home/news')
    }, 3000)
  }

  render() {
    return (
      <ul>
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    );
  }
}

export default Details;
