import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Framework from './Framework'


ReactDOM.render(
    <BrowserRouter>
        <Framework />
    </BrowserRouter>,
    document.getElementById('root'))