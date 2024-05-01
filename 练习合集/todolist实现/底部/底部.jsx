import React, { Component } from 'react'
import './底部.css'

export default class 底部 extends Component {
  render() {
    let {输入,清除选中,全选} = this.props
    let 勾选数 =this.判断勾选()
    let 总数 = 输入.length
    let 判断全选 = false
    if (勾选数 == 总数 && 总数 != 0){
      判断全选 = true
    }
    return (
      <div>
        <ul className='底部块'>
          <li className='提示'>
            <input type="checkbox" name='全选' checked={判断全选} onChange={全选} />
            <span>已完成{勾选数}/全部{总数}</span>
            <button onClick={清除选中} className='按钮'>清除已选中内容</button>
          </li>
        </ul>
      </div>
    )
  }

判断勾选 = () => {
    let { 输入 } = this.props
    let 勾选 = 输入.filter(a => { if (a.选中 == true) return a })
    return 勾选.length
  }

}
