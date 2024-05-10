import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Title from './title/Title';
import Index from './IndexBar/Index';
import Search from './Search/Search';
import Menu from './menu/Menu';
import './App.css';
import languagePack from '../../config/language.json';

export default function App() {
  const [content, setContent] = useState([['/search', 'Search']]);
  const [languageFile, setLanguageFile] = useState('zh');
  const [clicked, setClicked] = useState(true);

  sessionStorage.setItem('language', JSON.stringify(languagePack[languageFile]));

  Array.prototype.remove = function (str) {
    this.forEach((item, index) => {
      if (item === str) {
        this.splice(index, 1);
      }
    });
  };

  // Viewing comic pages can be done with native HTML, just use img tags and click to navigate. It's straightforward.
  return (
    <div className='main-container'>
      <Title />
      <Menu clicked={clicked} />
      <div className={clicked ? 'non-title-menu' : 'non-title'}>
        <Index indexItems={[...content]} clicked={clicked} setClicked={setClicked} />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path='/' element={<Navigate to="/search" />} />
        </Routes>
      </div>
    </div>
  );
}
