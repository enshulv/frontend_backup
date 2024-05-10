import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Frame from './Frame'

ReactDOM.render(
    <BrowserRouter>
        <Frame />
    </BrowserRouter>,
    document.getElementById('root'))
