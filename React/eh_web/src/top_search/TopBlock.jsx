import React from 'react'
import Button from './Button'
import './Top.css'

export default function TopBlock(classesAndTags) {
  let list = []
  for (let tag in classesAndTags) {
    list.push(<Button key={tag} tag={tag} class={classesAndTags[tag][0]} />)
  }

  return (
    <div className='TopBlock'>
      <form action=''>
        <div className='tagButton'>{list}</div>
        <input className='SearchBar' type="text" />
        <button className='UploadSearch'>Search</button>
      </form>
      <div className='Settings'>
        <a href="">Click to go to settings</a>
      </div>
    </div>
  )
}
