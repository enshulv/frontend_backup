import React, { Component } from 'react';
import { Link, Route, } from 'react-router-dom'
import 讯息 from './讯息'

class 新闻 extends Component {
  state = {
    内容: [
      { id: 1, 标题: '第一个', 内容: '这是第一条' },
      { id: 2, 标题: '第二个', 内容: '这是第二条' },
      { id: 3, 标题: '第三个', 内容: '这是第三条' },
    ]
  }
  render() {
    let { push, replace, goBack, goForward, go } = this.props.history
    return (
      <div>
        <ul>
          {this.state.内容.map((a) => {
            let 传参 = `${a.id}/?id=${a.id}&标题=${a.标题}&内容=${a.内容}`
            return <li key={a.id}>
              <Link replace={true} to={`/家/新闻/${传参}`} className="新闻">这是新闻{a.id}</Link>
              <button onClick={this.查看(传参, push)}>添加查看</button>
              <button onClick={this.查看(传参, replace)}>替换查看</button>
            </li>
          })}
        </ul>
        {this.state.内容.map((a) => {
          return <Route key={a.id} path={`/家/新闻/${a.id}`} component={讯息} />
        })}
        <br />
        <button onClick={this.历史操作(goForward)}>前进</button>
        <button onClick={this.历史操作(goBack)}>后退</button>
        <br />
        <input ref={a => { this.步数 = a }} type="number" placeholder='正数前进，负数后退' />
        <button onClick={this.历史操作(go, false)}>确定</button>
      </div>
    );
  }

  查看 = (传参, 操作) => {
    return () => {
      操作(`/家/新闻/${传参}`)
    }
  }

  历史操作 = (操作, 数字 = true) => {
    return () => {
      数字 ? 操作() : 操作(this.步数.value)
    }
  }
}

export default 新闻;