import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <input onKeyDown={this.props.addItem} className='input' type="text" placeholder='Enter your task name, press Enter to confirm' />
      </div>
    )
  }
}
