import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    let { goBack, goForward } = this.props.history
    return (
      <div className='header'>
        <h1>This is a router test page</h1>
        <button onClick={this.handleHistory(goForward)}>Go Forward</button>
        <button onClick={this.handleHistory(goBack)}>Go Back</button>
      </div>
    )
  }

  handleHistory = (action) => {
    return () => {
      action()
    }
  }
}

export default withRouter(Header)
