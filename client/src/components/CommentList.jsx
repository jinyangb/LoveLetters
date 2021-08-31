import React, { useState } from 'react'
import Tasks from './Tasks'
import Task from './Task'
import TextInput from './TextInput'
import { useHistory } from 'react-router'
import axios from 'axios'


const TodoList = ({ newLetter, handleChange, addNewLetter }) => {
  const [games, manageGames] = useState([])
  const [input, setInput] = useState('')
  const history = useHistory()

  

  const addNewLetter = async (formdata) => {
    // let myNewList = [...letters, newLetter]
    // manageGames(myNewList)
    console.log('newComment', formdata)
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/comments`
          : 'http://localhost:3001/comments',
        formdata
      )
      return res.data
    } catch (error) {
      console.log(error)
    }

  }

  const removeComment = (index) => {
    let myNewPost = [...comments]
    myNewPost.splice(index, 1)
    manageGames(myNewPost)
  }

  // const handleOtherChange = (event) => {
  //   setInput(event.target.value)
    
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewComment(newComment)
    

  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit} >
        <TextInput
          type="text"
          value={newComment.name}
          onChange={handleChange}
          name={'Name'}
          placeholder={'Name'}
      
          

        />
        <TextInput
          type="text"
          value={newComment.date}
          onChange={handleChange}
          name={'Date'}
          placeholder={'Date'}
          
      
        />
        <TextInput
          type="text-area"
          value={newComment.body}
          onChange={handleChange}
          name={'Comment'}
          placeholder={'Comment'}
          // 
        
        />
        <button>Submit</button>
      </form>
      <Task comments={comments} removeComment={removeComment} />
    </div>
  )
}

export default TodoList
