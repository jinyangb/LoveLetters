import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Comment from '../components/Comment'

const Comments = () => {
  const [comment, setComment] = useState({
    comment: ''
  })
  const [comments, setComments] = useState([])

  const handleChange = (e) => {
    console.log('test')
    setComment({ ...comment, [e.target.name]: e.target.value })
  }
  const addNewComment = async (comment) => {
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/api/comments`
          : 'http://localhost:3001/api/comments',
        comment
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const getComments = async () => {
    const res = await axios.get('http://localhost:3001/api/comments')
    setComments(res.data.comments)
  }

  useEffect(() => {
    getComments()
  }, [comment])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewComment(comment)
    getComments()
    document.getElementById('com').reset()
  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit} id="com">
        <input
          type="text"
          onChange={(e) => {
            handleChange(e)
          }}
          name={'Comment'}
          placeholder={'Comment'}
        />
        <button>Submit</button>
      </form>
      <div>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default Comments
