import { React, useState } from 'react'
import SearchBar from './dearch_bar/SearchBar'
import SearchContent from './search_content/SearchContent'
import Tags from '../../../config/db.text.json'
import './Search.css'

export default function Search() {
  const mainProcess = window.main
  const defaultSelectAll = true
  const language = JSON.parse(sessionStorage.getItem('语言'))

  const [selectedTag, setSelectedTag] = useState(defaultSelectAll ? Object.values(language['buttons']).map((tarr) => { return tarr[0]; }) : [])
  const [tagValue, setTagValue] = useState(0)

  const [searchResult, setSearchResult] = useState(false)

  if(!searchResult){
    setSearchResult(mainProcess.getPage('gallery'))
  }

  const props = {
    searchResult: searchResult,
    setSearchResult: setSearchResult,
    mainProcess: window.main,
    language: language,
    selectedTag: selectedTag,
    setSelectedTag: setSelectedTag,
    tagValue: tagValue,
    setTagValue: setTagValue,
    tagDb: Tags
  }

  return (
    <div className='Search-MainBox'>
      <SearchBar {...props}/>
      <SearchContent {...props} />
    </div>
  )
}
