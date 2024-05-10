import { React, useState } from 'react'
import './MenuDetails.css'
import Avatar from './1.png'

export default function MenuDetails() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className='MenuDetails'>
            <div className='Avatar'>
                <img src={Avatar} />
            </div>
            <div className='Username'>Username Here</div>
        </div>
    )
}
