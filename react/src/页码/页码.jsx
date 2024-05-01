import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function 页码(props) {
    const { 页码, set页码, 总页, 当前页, set当前页 } = props
    let 最后页 = 页码[页码.length - 1]

    const 后退 = () => {
        if (当前页 != 1 && 当前页 == 页码[0]) {
            let 更新表 = []
            let i, l
            if (页码[0] < 7) {
                i = 1
                l = 7
            } else {
                i = 页码[0] - 7
                l = 最后页 - 7
            }
            for (i; i <= l; i++) {
                更新表.push(i)
            }
            set页码(更新表)
        }
        set当前页(当前页 - 1)
    }

    const 前进 = () => {
        if (当前页 != 总页 && 当前页 == 最后页) {
            let 更新表 = []
            let i, l
            if (最后页 + 7 > 总页) {
                i = 总页 - 7
                l = 总页
            } else {
                i = 最后页 + 1
                l = 最后页 + 7
            }
            for (i; i <= l; i++) {
                更新表.push(i)
            }
            set页码(更新表)
        }
        set当前页(当前页 + 1)
    }

    const 判断选中 = (是否选中) => {
        if (是否选中.isActive) {
            return '选中'
        }
    }

    const 更新页码 = (a, 起始,结束) => {
        return () => {
            set当前页(a)
            let 更新表 = []
            if (结束 < 7) {
                起始 = 1
                结束 = 7
                set当前页(页码[0] - 1)
            } else if (结束 > 总页) {
                起始 = 总页 - 7
                结束 = 总页
                set当前页(最后页 + 1)
            }
            for (起始; 起始 <= 结束; 起始++) {
                更新表.push(起始)
            }
            set页码(更新表)
        }
    }

    return (
        <ul className='页码块'>
            <li>{当前页 != 1 ? <Link onClick={后退} to={`/page/${当前页 - 1}`}>{'<'}</Link> : <a>{'<'}</a>}</li>
            {页码[0] != 1 ? <li><Link onClick={更新页码(1, 1, 7)} to="/page/1">1</Link></li> : null}
            {页码[0] != 1 ? <li><Link onClick={更新页码(最后页 - 7,页码[0] - 7, 最后页 - 7)} to={`/page/${页码[0] - 1}`}>...</Link></li> : null}
            {页码.map((a) => {
                return <li key={a}><NavLink onClick={() => {set当前页(a)}} to={`/page/${a}`} className={判断选中}>{a}</NavLink></li>
            })}
            {总页 > 最后页 ? <li><Link onClick={更新页码(页码[0] + 7,页码[0] + 7, 最后页 + 7)} to={`/page/${最后页 + 1}`}>...</Link></li> : null}
            {最后页 != 总页 ? <li><Link onClick={更新页码(总页, 总页 - 7, 总页)} to={`/page/${总页}`}>{总页}</Link></li> : null}
            <li>{当前页 != 总页 ? <Link onClick={前进} to={`/page/${当前页 + 1}`}>{'>'}</Link> : <a>{'>'}</a>}</li>
        </ul>
    )
}
