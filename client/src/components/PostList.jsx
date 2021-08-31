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
          onChange={(e)=>
            {handleChange(e)}}
          name={'Name'}
          placeholder={'Name'}
        />
        <TextInput
          type="text"
          value={newLetter.date}
          onChange={(e)=>
            {handleChange(e)}}
          name={'Date'}
          placeholder={'Date'}
          
      
        />
        <TextInput
          type="text"
          value={newLetter.content}
          onChange={(e)=>
            {handleChange(e)}}
          name={'Content'}
          placeholder={'Content'}
        />
        <button>Submit</button>
      </form>
      <Tasks letters={letters} removeLetter={removeLetter} />
    </div>
  )
}

export default TodoList
