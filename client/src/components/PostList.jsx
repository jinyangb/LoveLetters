import React, { useState } from 'react'
import Tasks from './Tasks'
import Task from './Task'
import TextInput from './TextInput'
import { useHistory } from 'react-router'
import axios from 'axios'


const TodoList = ({ newLetter, handleChange, addLetter }) => {
  const [letters, manageLetters] = useState([])
  const [input, setInput] = useState('')
  const history = useHistory()

  

  const addNewLetter = async (formdata) => {
    // let myNewList = [...letters, newLetter]
    // manageGames(myNewList)
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/letters`
          : 'http://localhost:3001/letters',
        formdata
      )
      return res.data
    } catch (error) {
      console.log(error)
    }

  }

  const removeLetter = (index) => {
    let myNewPost = [...letters]
    myNewPost.splice(index, 1)
    manageLetters(myNewPost)
  }

  // const handleOtherChange = (event) => {
  //   setInput(event.target.value)
    
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewLetter(newLetter)
    

  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit} >
        <TextInput
          type="text"
          value={newLetter.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
      
          

        />
        <TextInput
          type="text"
          value={newLetter.date}
          onChange={handleChange}
          name={'img'}
          placeholder={'image'}
          
      
        />
        <TextInput
          type="text-area"
          value={newLetter.body}
          onChange={handleChange}
          name={'console'}
          placeholder={'console'}
          // 
        
        />
        <button>Submit</button>
      </form>
      <Tasks letters={letters} removeLetter={removeLetter} />
    </div>
  )
}

export default TodoList
