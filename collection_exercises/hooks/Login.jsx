import React from 'react'

export default function Login(props) {
    let { username, password } = props
    return (
        <div>
            <h1>Registration Successful!</h1>
            <h2>Username: {username}</h2>
            <h2>Password: {password}</h2>
        </div>
    )
}
