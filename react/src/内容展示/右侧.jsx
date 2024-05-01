import React from 'react'

export default function 右侧(props) {
  const { title, title_jpn, tags } = props

  return (
    <div className='右侧'>
      <div className='右侧_标题'>
        <p>{title}</p>
        {title_jpn}
      </div>
      <div className='右侧_tags'>
        {tags.map((a) => {
          let b_tag = Object.keys(a)[0]
          let s_tag = a[b_tag]
          return (
            <div key={b_tag} className='右侧_tag'>
              <div className='tag_标题'>{b_tag}:</div>
              <div className='tag_内容'>
                {s_tag.map((b) => {
                  return <a href="" key={b}>{b}</a>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

