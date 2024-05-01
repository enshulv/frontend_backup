import { React } from 'react'
import { NavLink} from 'react-router-dom'
import './索引.css'

export default function 索引(props) {
  const { 索引项,点击,set点击 } = props
  const {菜单} = JSON.parse(sessionStorage.getItem('语言'))

  const 点击高亮 = ({ isActive }) => {
    return isActive ? "已点击" : "未点击"
  }

  return (
    <div className='索引项'>
      <div className='菜单' onClick={() => {set点击(!点击)}}>
        <span>{菜单}</span>
      </div>
      {索引项.map((a) => {
        return (
          <div className='跳转' key={a[1]}>
            <div>{'>'}</div>
            <div className='跳转项'>
              <NavLink className={点击高亮} to={a[0]}>
                <span>{a[1]}</span>
              </NavLink>
            </div>
          </div>
        )
      })}
    </div>
  )
}
