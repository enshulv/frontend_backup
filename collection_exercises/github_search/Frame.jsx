import React, { Component } from 'react';
import axios from 'axios'
import Display from './display/Display'
import Search from './search/Search'

class Frame extends Component {
  state={displayData:[], loading:<h1>Welcome, please enter a username to search</h1>}

  render() {
    return (
      <div>
        <Search onSearch={this.search}/>
        <Display {...this.state}/>
      </div>
    );
  }

  search = (query) => {
    let regex = /[\u4e00-\u9fa5]+/
    if (regex.test(query) || query === '') {
      alert('Please enter valid content (only English letters are allowed)')
    }
    else {
      this.setState({displayData:[], loading:<h1>Searching...</h1>})
      let url = `https://api.github.com/search/users?q=${query}`
      axios.get(url).then(
        success => { this.updateDisplay(success) },
        error => { this.setState({loading:<h1 style={{color:'red'}}>Request failed: {error.message}</h1>}) }
      )
    }
  }

  updateDisplay = (response) => { 
    let {data:{items: data}} = response
    this.setState({displayData: data})
   }
}

export default Frame;
