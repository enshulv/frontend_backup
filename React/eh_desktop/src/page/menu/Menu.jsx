import React from 'react'
import './Menu.css'
import MenuDetails from './menu_details/MenuDetails'

export default function Menu(props) {
  const isOpen = props['onClick']
  return (
    <div className={isOpen ? 'MenuBar' : 'MenuBar-Hidden'}>
      <div className='MenuContent'>
        <MenuDetails/>
      </div>
    </div>
  )
}
