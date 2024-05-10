import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import './App.css';

export default function App() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className='wrapper'>
            <div className='title'>
                <input type="checkbox" className='menu' id='menu-' onClick={handleClick} />
                <label htmlFor="menu-">
                    {clicked ? <BiX /> : <BiMenu />}
                </label>
            </div>
        </div>
    );
}
