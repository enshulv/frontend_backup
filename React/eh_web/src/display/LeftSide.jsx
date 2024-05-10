import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../non_component/img.jpg';
import { Context } from '../Framework';
import './Display.css';

export default function LeftSide(props) {
  const { gid, thumb: cover, token, posted: timestamp, category: tag, uploader, filesize, filecount, rating, torrents } = props;
  const receivedTags = useContext(Context);
  const seedCount = torrents.length;

  let tagName, className;
  for (let i in receivedTags) {
    if (receivedTags[i][1] == tag.toLowerCase()) {
      tagName = i;
      className = receivedTags[i][0];
    }
  }

  const displayRows = [
    { 'Gallery ID:': gid },
    { 'Token:': token },
    { 'Time:': new Date(timestamp * 1000).toLocaleString() },
    { 'Visible:': 'Yes' },
    { 'Size:': `${(filesize / 1044480).toFixed(2)}Mb` },
    { 'Length:': `${filecount} pages` },
    { 'Seeds:': seedCount == 0 ? 0 : seedCount },
    { 'Rating:': rating },
  ];

  return (
    <div className='LeftSide'>
      <img src={img} className='img'/>
      <div className='LeftSide_Content'>
        <div className={`${className} tag`}>{tagName}</div>
        <a className='Uploader' href="">{uploader}</a>
        {displayRows.map((row) => {
          let title = Object.keys(row)[0];
          let content = Object.values(row)[0];
          let isSeed = title == 'Seeds:' && content != 0 ? true : false;
          return (
            <div key={title} className="Description">
              <span className='Title'>{title}</span>
              <span className='Value'>{
                isSeed ? <Link to={`${gid}`} state={torrents}>{content}</Link> : content
              }</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
