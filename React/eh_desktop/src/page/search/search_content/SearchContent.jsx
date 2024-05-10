import { React, useState } from 'react'
import './SearchContent.css'
import Image from './1.jpg'

export default function SearchContent(props) {
  const { searchResult, setSearchResult, mainProcess, language, setSelectedTag, setTagValue, buttons, tagDb } = props
  const { tags: tagTranslation, list, tile, pages } = language
  const [displayItems, setDisplayItems] = useState(searchResult)
  const [style, setStyle] = useState(true)

  const toggleButton = () => {
    setStyle(!style)
  }

  const clickTag = (a) => {
    const currentTag = a.target.textContent
    setSelectedTag([currentTag])
    setTagValue(1023 - buttons[currentTag][1])
  }

  const clickUploader = (a) => {
    const searchBar = document.getElementsByClassName('SearchBar')[0]
    searchBar.value = `uploader:${a.target.textContent}`
  }

  const toObject = (a) => {
    const object = {}
    a.split(';').forEach((b) => {
      const keyValue = b.split(':')
      keyValue[0] = keyValue[0] === 'background-position' ? 'backgroundPosition' : keyValue[0]
      object[keyValue[0]] = keyValue[1]
    })
    return object
  }

  const handleTags = function (a) {
    const dictionary = {}
    a.forEach((b) => {
      const bigTag = b.split(':')[0] === '' ? 'temp' : b.split(':')[0]
      const subTag = b.split(':')[1]
      tagDb['']
    })
  }

  const loadTile = (a, lazyLoad) => {
    return (
      <div className='ContentBox' key={a['name']}>
        <div className='ImageBox'>
          <img src={Image} loading={lazyLoad ? 'lazy' : 'eager'} />
        </div>
        <div className='Category' onClick={clickTag} style={{ 'backgroundColor': tagTranslation[a['tag']][1] }}>{tagTranslation[a['tag']][0]}</div>
        <div className='Rating_Center'>
          <div className='Rating' style={toObject(a['rating'])}>star</div>
        </div>
        <div className='Name'>{a['name']}</div>
      </div>
    )
  }

  const loadList = (a, lazyLoad) => {
    return (
      <div className='ContentBox_' key={a['name']}>
        <div className='ImageBox_'>
          <img src={Image} loading={lazyLoad ? 'lazy' : 'eager'} />
        </div>
        <ul className='MiddleBox'>
          <li className='Category_' onClick={clickTag} style={{ 'backgroundColor': tagTranslation[a['tag']][1] }}>{tagTranslation[a['tag']][0]}</li>
          <li className='Time'>{a['uploadTime']}</li>
          <li className='Rating_Center'>
            <div className='Rating' style={toObject(a['rating'])}>star</div>
          </li>
          <li className='Uploader' onClick={clickUploader}>{a['uploader']['name']}</li>
          <li>{a['pages'].replace('pages', pages)}</li>
          <li className='Seed'>
            <div className={a['seed']['seed'] ? 'Seed_Yes' : 'Seed_No'}>seed</div>
          </li>
        </ul>
        <div className='RightBox'>
          <div className='Name_'>{a['name']}</div>
          <div className='Tags'>test</div>
        </div>
      </div>
    )
  }

  return (
    <div className='SearchContent'>
      <label className='StyleSwitch'>
        <span className='Tile'>{tile}</span>
        <input type="checkbox" className='ToggleButton' onClick={toggleButton} defaultChecked={style} />
        <span className='List'>{list}</span>
      </label>
      <div className={style ? 'DisplayBox_' : 'DisplayBox'}>
        {displayItems.map((a, i) => {
          const lazyLoad = i < 10 ? false : true
          const loadFormat = style ? loadList(a, lazyLoad) : loadTile(a, lazyLoad)
          return loadFormat
        })}
      </div>
    </div>
  )
}
