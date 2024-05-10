import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Link, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import RouteComponent from './RouteComponent'
import Login from './Login'

export default function Page() {
    const [status, setStatus] = useState(0)
    const [input, setInput] = useState({ username: null, password: null })
    const history = useNavigate()

    const ref = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const collection = [
        { id: 1, title: '111', content: '11111' },
        { id: 2, title: '222', content: '22222' },
        { id: 3, title: '333', content: '33333' },
    ]

    const add = () => {
        setStatus(status + 1)
    }

    const unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    const show = () => {
        console.log(ref.current.value);
    }

    const login = () => {
        const newInput = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        setInput(newInput)
        history('oncl/password')
    }

    useEffect(() => {
        let id = setInterval(() => {
            setStatus(status => status + 1)
        }, 20000)
        return () => {
            clearInterval(id)
        }
    }, [])
    return (
        <div>
            <h1>Current sum is {status}</h1>
            <button onClick={add}>Click me +1</button>
            <button onClick={unmount}>Unmount</button>
            <input type="text" ref={ref} />
            <button onClick={show}>Show</button><br />
            <Link to={"oncl/1"}>Click to expand 1</Link><br />
            <Link to={"oncl/2"}>Click to expand 2</Link><br />
            <Link to={"oncl/3"}>Click to expand 3</Link><br />
            <input ref={usernameRef} type="text" placeholder='Enter username' /><br />
            <input ref={passwordRef} type="password" placeholder='Enter password' /><br />
            <button onClick={login}>Confirm</button>
            <Routes>
                <Route path="oncl/:id" element={<RouteComponent collection={collection} />} />
                <Route path="oncl/password" element={<Login {...input} />} />
                <Route path="" element={<Navigate to="oncl/1" />} />
            </Routes>
        </div>
    )
}
