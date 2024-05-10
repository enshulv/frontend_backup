import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    let { input, clearSelected, selectAll } = this.props
    let selectedCount = this.countSelected()
    let totalCount = input.length
    let isAllSelected = false
    if (selectedCount === totalCount && totalCount !== 0) {
      isAllSelected = true
    }
    return (
      <div>
        <ul className='footer-block'>
          <li className='hint'>
            <input type="checkbox" name='selectAll' checked={isAllSelected} onChange={selectAll} />
            <span>Completed {selectedCount} / Total {totalCount}</span>
            <button onClick={clearSelected} className='button'>Clear selected</button>
          </li>
        </ul>
      </div>
    )
  }

  countSelected = () => {
    let { input } = this.props
    let selected = input.filter(a => a.selected === true)
    return selected.length
  }

}
