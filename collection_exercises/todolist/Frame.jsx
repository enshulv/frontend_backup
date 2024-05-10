import React, { Component } from 'react'
import SearchBar from '../top/SearchBar'
import Todo from './todo/Todo'
import Footer from '../footer/Footer'
import './Frame.css'

export default class Frame extends Component {
  state = { input: [] }

  render() {
    let state = this.state
    return (
      <div id='frame'>
        <SearchBar addItem={this.addItem} />
        <Todo {...{ clear: this.clear, updateCheck: this.updateCheck }} {...state} />
        <Footer {...{ clearSelected: this.clearSelected, selectAll: this.selectAll }} {...state} />
      </div>
    )
  }

  addItem = (event) => {
    if (event.key === 'Enter') {
      let value = event.target.value
      if (value === '') {
        alert('The input cannot be empty')
        return false
      }
      let { input } = this.state
      let newItem = { id: input.length + 1, name: value, selected: false }
      this.setState({ input: [...input, newItem] })
      event.target.value = ''
    }
  }

  clear = (id) => {
    return () => {
      let { input } = this.state
      if(!window.confirm('Are you sure you want to delete this item?')) return false
      let updatedInput = input.filter(item => item.id !== id)
      this.setState({ input: updatedInput })
    }
  }

  updateCheck = (id) => {
    return (event) => {
      let { input } = this.state
      let updatedInput = input.map(item => {
        if (item.id === id) item.selected = event.target.checked;
        return item
      })
      this.setState({ input: updatedInput })
    }
  }

  clearSelected = () => {
    let { input } = this.state
    let filteredInput = input.filter(item => !item.selected)
    this.setState({ input: filteredInput })
  }

  selectAll = (event) => {
    let { input } = this.state
    let updatedInput = input.map(item => {
      item.selected = event.target.checked;
      return item
    })
    this.setState({ input: updatedInput })
  }
}
