import React,{useState} from 'react'

export default function 按钮(props) {
  let { 类, 标签 } = props
  const [选中,set选中] = useState(true)
  const [亮度,set亮度] = useState({filter:'brightness(1)'})

  const 点击效果=() => { 
    if(选中){
      set亮度({filter:'brightness(0.5)',transition:'filter 0.12s'})
    }
    else{
      set亮度({filter:'brightness(1)',transition:'filter 0.12s'})
    }
    set选中(!选中)
   }

  return (
    <label className={类} style={亮度}>
      <input type='checkbox' checked={选中} onChange={点击效果}></input>
      <span>{标签}</span>
    </label>
  )
}
