import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Seed() {
  const history = useNavigate();
  const { state: seeds } = useLocation();

  const check = (event) => {
    if (event.target.className == 'mask') history(-1);
  };

  useEffect(() => {
    document.addEventListener('click', check);
    return () => {
      document.removeEventListener('click', check);
    };
  });

  return (
    <div className='Mask'>
      <table cellSpacing="0" className='SeedPage'>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Uploader</th>
          <th>File Size</th>
          <th>Upload Time</th>
        </tr>
        {seeds.map((seed) => {
          const { id, name, hash, addedstr: timestamp, fsizestr: size, uploader } = seed;
          return (
            <tr className='SeedContent'>
              <td>{id}</td>
              <td><a href={hash}>{name}</a></td>
              <td>{uploader}</td>
              <td>{size}</td>
              <td>{timestamp}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
