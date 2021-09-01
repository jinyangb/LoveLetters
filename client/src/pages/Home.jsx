import React, { useState } from 'react'
import TextInput from './TextInput'
import axios from 'axios'

const TodoList = ({ newLetter, handleChange }) => {
  const addNewLetter = async (formdata) => {
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/api/letters`
          : 'http://localhost:3001/api/letters',
        formdata
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  }
  const getNewLetter = async (formdata) => {
    try {
      const res = await axios.get(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/api/letters`
          : 'http://localhost:3001/api/letters',
        formdata
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  }
  const removeNewLetter = async (formdata) => {
    try {
      const res = await axios.delete(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/api/letters`
          : 'http://localhost:3001/api/letters',
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
    addNewLetter(newLetter)
    getNewLetter(newLetter)
    removeNewLetter(newLetter)
  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newLetter.name}
          onChange={(e) => {
            handleChange(e)
          }}
          name={'Name'}
          placeholder={'Name'}
        />
        <TextInput
          type="text"
          value={newLetter.date}
          onChange={(e) => {
            handleChange(e)
          }}
          name={'Date'}
          placeholder={'Date'}
        />
        <TextInput
          type="text"
          value={newLetter.content}
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
