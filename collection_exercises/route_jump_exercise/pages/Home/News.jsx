import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Information from './Information';

class News extends Component {
  state = {
    content: [
      { id: 1, title: 'First', content: 'This is the first one' },
      { id: 2, title: 'Second', content: 'This is the second one' },
      { id: 3, title: 'Third', content: 'This is the third one' },
    ]
  };

  render() {
    let { push, replace, goBack, goForward, go } = this.props.history;
    return (
      <div>
        <ul>
          {this.state.content.map((item) => {
            let params = `${item.id}/?id=${item.id}&title=${item.title}&content=${item.content}`;
            return (
              <li key={item.id}>
                <Link replace={true} to={`/home/news/${params}`} className="news">This is news {item.id}</Link>
                <button onClick={this.view(params, push)}>Add View</button>
                <button onClick={this.view(params, replace)}>Replace View</button>
              </li>
            );
          })}
        </ul>
        {this.state.content.map((item) => {
          return <Route key={item.id} path={`/home/news/${item.id}`} component={Information} />;
        })}
        <br />
        <button onClick={goForward}>Forward</button>
        <button onClick={goBack}>Backward</button>
        <br />
        <input ref={input => { this.step = input }} type="number" placeholder='Positive to forward, negative to backward' />
        <button onClick={() => { go(parseInt(this.step.value)) }}>Confirm</button>
      </div>
    );
  }

  view = (params, action) => {
    return () => {
      action(`/home/news/${params}`);
    };
  };

  historyAction = (action, isNumber = true) => {
    return () => {
      isNumber ? action() : action(parseInt(this.step.value));
    };
  };
}

export default News;
