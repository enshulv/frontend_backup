import React, { useState } from 'react'

export default function Button(props) {
  const { class: className, tag } = props
  const [selected, setSelected] = useState(true)
  const [brightness, setBrightness] = useState({ filter: 'brightness(1)' })

  const clickEffect = () => {
    if (selected) {
      setBrightness({ filter: 'brightness(0.5)', transition: 'filter 0.12s' })
    } else {
      setBrightness({ filter: 'brightness(1)', transition: 'filter 0.12s' })
    }
    setSelected(!selected)
  }

  return (
    <label className={className} style={brightness}>
      <input type='checkbox' checked={selected} onChange={clickEffect}></input>
      <span>{tag}</span>
    </label>
  )
}
