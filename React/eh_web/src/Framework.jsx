import React, { createContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import TopBlock from './topSearch/TopBlock';
import PaginationBlock from './pege/PaginationBlock';
import Seed from './display/Seed';
import './Framework.css';

export const Context = createContext();

export default function Framework() {
  const [matchCount, setMatchCount] = useState(1000);
  const [hint, setHint] = useState(true);

  let firstSevenPages = [];
  if (matchCount >= 70) {
    for (let i = 1; i <= 7; i++) {
      firstSevenPages.push(i);
    }
  } else {
    for (let i = 1; i <= matchCount / 10; i++) {
      firstSevenPages.push(i);
    }
  }

  const categoriesAndTags = { 'Doujinshi': ['Doujinshi', 'doujinshi'], 'Manga': ['Manga', 'manga'], 'Artist CG': ['Artist CG', 'artist cg'], 'Game CG': ['Game CG', 'game cg'], 'Western': ['Western', 'western'], 'Non-H': ['Non-H', 'non-h'], 'Image Set': ['Image Set', 'image set'], 'Cosplay': ['Cosplay', 'cosplay'], 'Asian Porn': ['Asian Porn', 'asian porn'], 'Misc': ['Misc', 'misc'] };

  return (
    <div className='framework'>
      <TopBlock {...categoriesAndTags} />
      <p className='match-count'>Found {matchCount} results</p>
      <Context.Provider value={categoriesAndTags}>
        <Routes>
          <Route path="page/:pages" element={<PaginationBlock firstSevenPages={firstSevenPages} totalPages={matchCount / 10} />}>
            <Route path=":gid" element={<Seed />} />
          </Route>
          <Route path="/" element={<Navigate to="/page/1" />} />
        </Routes>
      </Context.Provider>
      <p className='footer-note'>This is a test website</p>
      <div className='footer-hint' style={{ display: hint ? '' : 'none' }} onClick={() => { setHint(false) }}>
        <span>
          This site is a demo running on a server. Please be aware of timeouts, unresponsive searches, or server crashes.<br />For crawlers: If you need the complete data from this site, you can obtain a database dump from GitHub Release (Updated on 2022-01-18).
        </span>
      </div>
    </div>
  );
}
