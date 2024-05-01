import React from 'react'
import 左侧 from './左侧'
import 右侧 from './右侧'

export default function 展示块(props) {

  return (
    <div className='展示块'>
      <左侧 {...props} />
      <右侧 {...props}/>
    </div>
  )
}

