import React, { useState, useEffect } from 'react'
// import TextInput from './TextInput'
import axios from 'axios'


const Comments = () => {

  const [comment, setComment] = useState(
    {
      comment: ''
    }
  )
  // const [comments, setComments] = useState([])

  const handleChange = (e) => {
    console.log('test')
    setComment({ ...newLetter, [e.target.name]: e.target.value })

  const addNewComment = async (formdata) => {
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/api/comments`
          : 'http://localhost:3001/api/comments',
        formdata
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
    
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewComment(comment)
  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          onChange={(e) => {
            handleChange(e)
          }}
          name={'comment'}
          placeholder={'comment'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Comments
