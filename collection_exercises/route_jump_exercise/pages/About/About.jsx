import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ImageDetails from './ImageDetails';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to="/about/image">
          <img src="https://wx2.sinaimg.cn/mw2000/ed59c63fly1h0qqmvpua9j20u011in0s.jpg" style={{'height':'300px'}} />
        </Link>
        <Route path="/about/image" component={ImageDetails}/>
      </div>
    );
  }
}
