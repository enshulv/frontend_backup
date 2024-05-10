import React, { Component } from 'react'
import Table from './Table'
import './Display.css'

export default class Display extends Component {
  render() {
    let { displayData: data, loading } = this.props
    return (
      <div>
        <ul className='table'>
          {data.length === 0 ? loading :
          data.map(item => { return <Table key={item.id} {...item} /> })
          }
        </ul>
      </div>
    )
  }
}
