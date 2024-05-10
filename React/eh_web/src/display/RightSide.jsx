import React from 'react'

export default function RightSide(props) {
  const { title, title_jpn, tags } = props

  return (
    <div className='RightSide'>
      <div className='RightSide_Title'>
        <p>{title}</p>
        {title_jpn}
      </div>
      <div className='RightSide_Tags'>
        {tags.map((tagGroup) => {
          let mainTag = Object.keys(tagGroup)[0]
          let subTags = tagGroup[mainTag]
          return (
            <div key={mainTag} className='RightSide_Tag'>
              <div className='tag_Title'>{mainTag}:</div>
              <div className='tag_Content'>
                {subTags.map((subTag) => {
                  return <a href="" key={subTag}>{subTag}</a>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
