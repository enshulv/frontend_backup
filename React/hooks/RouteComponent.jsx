import React from 'react'
import { useParams } from 'react-router-dom'

export default function RouteComponent(props) {
  const params = useParams()
  const result = props.collection.find((item) => {
    if(item.id === params.id) { return item }
  })
  return (
    <ul>
      <li>id: {result.id}</li>
      <li>Title: {result.title}</li>
      <li>Content: {result.content}</li>
    </ul>
  )
}
