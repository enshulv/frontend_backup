import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default function DisplayBlock(props) {
  return (
    <div className='DisplayBlock'>
      <LeftSide {...props} />
      <RightSide {...props}/>
    </div>
  )
}
