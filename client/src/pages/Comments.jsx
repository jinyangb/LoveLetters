import React, { useState } from 'react'
import TextInput from './TextInput'
import axios from 'axios'

const Comments = ({ newComment, handleChange }) => {
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
  const getComments = async (formdata) => {
    try {
      const res = await axios.get(
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
  const removeNewComment = async (formdata) => {
    try {
      const res = await axios.delete(
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewComment(newComment)
    removeNewComment(newComment)
  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment.name}
          onChange={(e) => {
            handleChange(e)
          }}
          name={'Name'}
          placeholder={'Name'}
        />
        <TextInput
          type="text"
          value={newComment.date}
          onChange={(e) => {
            handleChange(e)
          }}
          name={'Date'}
          placeholder={'Date'}
        />
        <TextInput
          type="text"
          value={newComment.content}
          onChange={(e) => {
            handleChange(e)
          }}
          name={'Content'}
          placeholder={'Content'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TodoList
