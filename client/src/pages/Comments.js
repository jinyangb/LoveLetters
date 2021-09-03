import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Comment from '../components/Comment'
import BASE_URL from '../globals'

const Comments = () => {
  const [comment, setComment] = useState({
    Comment: ''
  })
  const [comments, setComments] = useState([])

  const handleChange = (e) => {
    console.log('test')
    setComment({ ...comment, [e.target.name]: e.target.value })
  }
  const addNewComment = async (comment) => {
    try {
      const res = await axios.post(`${BASE_URL}/comments`, comment)

      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const getComments = async () => {
    const res = await axios.get(`${BASE_URL}/comments`)
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
    // document.getElementById('com').reset()
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
        <br />
        <button>Submit</button>
      </form>
      <div>
        {comments
          ? comments.map((comment) => <Comment comment={comment} />)
          : null}
      </div>
    </div>
  )
}

export default Comments
