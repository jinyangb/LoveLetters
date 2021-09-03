import React from 'react'
import axios from 'axios'
import BASE_URL from '../globals'

const Comment = ({ comment }) => {
  const deleteComment = async (id) => {
    await axios.delete(`${BASE_URL}/comments/${comment._id}`)
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
