import React from 'react'
import axios from 'axios'

const Comment = ({ comment }) => {
  const deleteComment = async (id) => {
    await axios.delete(`http://localhost:3001/api/comments/${comment._id}`)
    window.location.reload()
  }

  return (
    <div>
      <br />
      <div>{comment.Comment}</div>
      <br />
      <button onClick={deleteComment}>Hide Forever</button>
      <br />
    </div>
  )
}

export default Comment
