import React, { Component } from 'react';
import axios from 'axios'
import 展示 from './展示/展示'
import 搜索 from './搜索/搜索'

class 框架 extends Component {
  state={展示内容:[],加载:<h1>欢迎，请输入用户名查找</h1>}

  render() {
    return (
      <div>
        <搜索 查找={this.查找}/>
        <展示 {...this.state}/>
      </div>
    );
  }

  查找 = (内容) => {
    let 正则 = /[\u4e00-\u9fa5]+/
    if (正则.test(内容) || 内容 == '') {
      alert('请输入正确的内容(只能为英文)')
    }
    else {
      this.setState({展示内容:[],加载:<h1>查询中...</h1>})
      let url = `https://api.github.com/search/users?q=${内容}`
      axios.get(url).then(
        成功 => { this.添加(成功) },
        失败 => { this.setState({加载:<h1 style={{color:'red'}}>请求失败：{失败.message}</h1>}) }
      )
    }
  }

  添加 = (a) => { 
    let {data:{items:内容}} = a
    this.setState({展示内容:内容})
   }
}

export default 框架;