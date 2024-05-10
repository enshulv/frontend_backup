import React, { Component } from 'react'
import './Todo.css'

export default class Selected extends Component {
  state = { hoverState: false }

  render() {
    let { name, selected, id, clear, updateCheck } = this.props
    let { hoverState } = this.state
    return (
      <li onMouseOver={this.handleHover(true)} onMouseOut={this.handleHover(false)}>
        <label className='row'>
          <input type="checkbox" checked={selected} id={id} onChange={updateCheck(id)} />
          <span>{name}</span>
        </label>
        <button className='button' onClick={clear(id)} style={{ display: hoverState ? 'block' : 'none' }}>Clear</button>
      </li>
    )
  }

  handleHover = (hover) => {
    return () => {
      this.setState({ hoverState: hover })
    }
  }
}
