import React from 'react'
import Divider from 'muicss/lib/react/divider'
import Button from 'muicss/lib/react/button'

function Post({ post, index }) {
  return (
    <div key={index}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Button color="primary">button</Button>
      <Button color="danger">button</Button>
      <Divider />
    </div>
  )
}
export default Post
