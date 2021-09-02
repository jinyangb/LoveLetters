import React from 'react'
import axios from 'axios'

const Comment = ({ comment }) => {
  const deleteComment = async (id) => {
    await axios.delete(`http://localhost:3001/api/comments/${comment._id}`)
  }

  return (
    <div>
      <div>{comment.Comment}</div>
      <button onClick={deleteComment}>x</button>
    </div>
  )
}

export default Comment
