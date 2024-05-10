import React, { Component } from 'react'
import pubsub from 'pubsub-js'
import Table from './Table'
import './Display.css'

export default class Display extends Component {
  state = { displayData: [], loading: <h1>Welcome, please enter a username to search</h1> }

  componentDidMount() {
    this.token = pubsub.subscribe('status', (_, data) => {
      this.setState(data)
    })
  }

  componentWillUnmount() {
    pubsub.unsubscribe(this.token)
  }

  render() {
    let { displayData: data, loading } = this.state
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
