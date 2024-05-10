import React, { Component } from 'react'
import axios from 'axios'
import pubsub from 'pubsub-js'
import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div className='search'>
                <div className='search-section'>
                    <h2>Search GitHub Users</h2>
                    <input ref={input => { this.inputRef = input }} type="text" placeholder='Enter username to search' onKeyDown={(event) => {if(event.key === 'Enter'){this.throttleSearch()}}}/>
                    <button onClick={this.throttleSearch}>Search</button>
                </div>
            </div>
        )
    }

    throttleSearch = () => {
        // Using destructuring to get value directly from the input
        let { inputRef: { value: query }} = this
        setTimeout(() => {
            this.search(query)
        }, 1000)
    }

    search = (query) => {
    let regex = /[\u4e00-\u9fa5]+/
    if (regex.test(query) || query === '') {
      alert('Please enter valid content (only English letters are allowed)')
    }
    else {
      pubsub.publish('status', {displayData:[], loading:<h1>Searching...</h1>})
      let url = `https://api.github.com/search/users?q=${query}`
      axios.get(url).then(
        success => {
            let {data:{items}} = success
            pubsub.publish('status', {displayData:items})
         },
        error => { 
            let update={loading:<h1 style={{color:'red'}}>Request failed: {error.message}</h1>}
            pubsub.publish('status', update)
         }
      )
    }
  }
}
