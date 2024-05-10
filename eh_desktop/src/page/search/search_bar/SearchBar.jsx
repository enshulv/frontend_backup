import { React, useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  const { selectedTag, setSelectedTag, tagValue, setTagValue, language, tagDB: tags } = props;
  const { search, button, selectAll, deselectAll, tag: tagLabel } = language;
  const tagNames = Object.values(button);
  const tagBackgrounds = Object.values(button).map((tag) => {
    const tagData = [];
    Object.values(tagLabel).forEach((label) => {
      if (label[0] === tag[0]) {
        tagData.push(label[0], label[1]);
      }
    });
    return tagData;
  });
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const calculateValue = () => {
    const result = tagNames.map((tag) => {
      if (selectedTag.includes(tag[0])) {
        return tag[1];
      } else {
        return 0;
      }
    }).reduce((total, num) => total + num);
    return result;
  };

  const selectTag = (e) => {
    const tagLabel = e.target.nextSibling.innerHTML;
    if (selectedTag.includes(tagLabel)) {
      selectedTag.remove(tagLabel);
      setTagValue(calculateValue());
    } else {
      selectedTag.push(tagLabel);
      setTagValue(calculateValue());
    }
  };

  const selectAllHandler = (e) => {
    const currentState = e.target.nextSibling.innerHTML;
    if (currentState === deselectAll) {
      setSelectedTag([]);
      setTagValue(0);
    } else {
      setSelectedTag(Object.values(button).map((tagArr) => tagArr[0]));
      setTagValue(1023);
    }
  };

  const performSearch = () => {
    if (selectedTag.length === 0) {
      setSelectedTag(Object.values(button).map((tagArr) => tagArr[0]));
      setTagValue(1023);
    }
    setSearchSuggestions([]);
  };

  const searchQuery = (input) => {
    const searchResults = [];
    const preliminaryQuery = {};
    tags['data'].forEach((tagSet) => {
      const categoryData = tagSet['data'];
      for (let tag in categoryData) {
        const chineseName = categoryData[tag]['name'];
        if (tag.match(input) !== null || chineseName.match(input) !== null) {
          const english = `${tagSet['namespace']}:${tag}`;
          const chinese = `${tagSet['frontMatters']['name']}:${categoryData[tag]['name']}`;
          preliminaryQuery[english] = chinese;
        }
      }
    });
    for (let key of Object.keys(preliminaryQuery).sort().slice(0, 30)) {
      searchResults.push({ [key]: preliminaryQuery[key] });
    }
    return searchResults;
  };

  const inputHandler = (input) => {
    const value = input.target.value;
    const regex = value.split(/\s/);
    const content = regex[regex.length - 1];
    if (content !== '') {
      setSearchSuggestions(searchQuery(content));
    } else {
      setSearchSuggestions([]);
    }
  };

  const recheckTags = (input) => {
    const value = input.target.value;
    const regex = value.split(/\s/);
    const content = regex[regex.length - 1];
    if (content !== '' && searchSuggestions.length === 0) {
      setSearchSuggestions(searchQuery(content));
    }
  };

  const tagSearch = () => {
    const tag = document.getElementsByClassName('tag-block')[0];
    const tagText = tag.textContent;
    const searchBox = document.getElementsByClassName('search-box')[0];
    const searchText = searchBox.value;
    const regex = tagText.split(/:/);
    const searchRegex = searchText.split(/\s/);
    regex[1] = `:"${regex[1]}$`;
    const searchItem = regex[0][0] + regex[1];
    searchRegex[searchRegex.length - 1] = searchItem;
    searchBox.value = searchRegex.join(' ');
    setSearchSuggestions([]);
  };

  return (
    <div className='search'>
      <div className='search-block'>
        <input type='search' className='search-box' onChange={inputHandler} onClick={recheckTags} />
        <button className='search-button' onClick={performSearch}>{search}</button>
      </div>
      <ul className={searchSuggestions.length !== 0 ? 'suggestion-block' : 'suggestion-block-hidden'}>
        <div className='floating-suggestion'>
          {searchSuggestions.map((result) => {
            const englishProcessing = Object.keys(result)[0].split(/:/);
            englishProcessing[0] = englishProcessing[0][0];
            const english = englishProcessing.join(':');
            const chinese = result[Object.keys(result)];
            return (
              <div className='suggestion-content' key={english} onClick={tagSearch}>
                <li>
                  <div className='suggestion-english'>{english}</div>
                  <div className='suggestion-chinese'>{chinese}</div>
                </li>
              </div>
            );
          })}
        </div>
      </ul>
      <div className='tag-block'>
        {tagBackgrounds.map((tagData) => {
          return (
            <div className='tag-block' key={tagData[0]}>
              <label style={{ backgroundColor: tagData[1], opacity: selectedTag.includes(tagData[0]) ? 1 : 0.7 }}>
                <input type='checkbox' onClick={selectTag} />
                <span>{tagData[0]}</span>
              </label>
            </div>
          );
        })}
        <label className='select-all'>
          <input type="checkbox" onClick={selectAllHandler} />
          <span>{selectedTag.length !== 10 ? selectAll : deselectAll}</span>
        </label>
      </div>
    </div>
  );
}
