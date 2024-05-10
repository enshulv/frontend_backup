import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div className='search'>
                <div className='search-section'>
                    <h2>Search GitHub Users</h2>
                    <input ref={input => { this.input = input }} type="text" placeholder='Enter username to search' onKeyDown={(event) => {if(event.key === 'Enter'){this.throttleSearch()}}}/>
                    <button onClick={this.throttleSearch}>Search</button>
                </div>
            </div>
        )
    }

    throttleSearch = () => {
        // Using destructuring to get value directly from the input
        let { input: { value: query }, props: { onSearch } } = this
        setTimeout(() => {
            onSearch(query)
        }, 1000)
    }
}
