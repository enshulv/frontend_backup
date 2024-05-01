import React, { createContext, useState } from 'react'
import { Route, Routes, Navigate, } from 'react-router-dom'
import 顶部块 from './顶部搜索/顶部块'
import 页码和展示块 from './页码/页码块'
import 种子 from './内容展示/种子'
import './框架.css'

export const 上下文 = createContext()

export default function 框架() {
  const [匹配数量, set匹配数量] = useState(1000)
  const [提示, set提示] = useState(true)

  let 前七页 = []
  if (匹配数量 >= 70) {
    for (let i = 1; i <= 7; i++) {
      前七页.push(i)
    }
  } else {
    for (let i = 1; i <= 匹配数量 / 10; i++) {
      前七页.push(i)
    }
  }

  const 类和标签 = { '同人志': ['同', 'doujinshi'], '漫画': ['漫', 'manga'], '艺术家CG': ['绘', 'artist cg'], '游戏CG': ['游', 'game cg'], '西方': ['西', 'western'], '无H': ['无', 'non-h'], '图集': ['图', 'image set'], '角色扮演': ['角', 'cosplay'], '亚洲': ['亚', 'asian porn'], '杂项': ['杂', 'misc'], }

  return (
    <div className='框架'>
      <顶部块 {...类和标签} />
      <p className='匹配数量'>匹配到{匹配数量}个结果</p>
      <上下文.Provider value={类和标签}>
        <Routes>
          <Route path="page/:pages" element={<页码和展示块 前七页={前七页} 总页={匹配数量 / 10} />}>
            <Route path=":gid" element={<种子 />} />
          </Route>
          <Route path="/" element={<Navigate to="/page/1" />} />
        </Routes>
      </上下文.Provider>
      <p className='底部备注'>这是一个测试网址</p>
      <div className='底部提示' style={{ display: 提示 ? '' : 'none' }} onClick={() => { set提示(false) }}>
        <span>
          本站为demo，在服务器上运行，请注意请求超时，搜索时无响应或服务器死机<br />对于蜘蛛：如果您需要本站的完整数据，可以从 GitHub Release 获取数据库转储（2022-01-18 更新）
        </span>
      </div>
    </div>
  )
}
