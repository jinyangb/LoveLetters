import React, { useState } from 'react'
import Tasks from './Tasks'
import TextInput from './TextInput'
import { useHistory } from 'react-router'
import axios from 'axios'


const TodoList = ({ newLetter, handleChange, addLetter }) => {
  const [games, manageGames] = useState([])
  const [input, setInput] = useState('')
  const history = useHistory()

  

  const addNewLetter = async (formdata) => {
    // let myNewList = [...letters, newLetter]
    // manageGames(myNewList)
    console.log('newGame', formdata)
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
  
    // try {
    //   const res = await axios.post(`http://localhost:3001/games`, formdata)
    //   return res.data
    // } catch (error) {console.log(error)}
  }

  const removeLetter = (index) => {
    let myNewPost = [...letters]
    myNewPost.splice(index, 1)
    manageGames(myNewPost)
  }

  // const handleOtherChange = (event) => {
  //   setInput(event.target.value)
    
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewLetter(newLetter)
    
    // history.push('/')
    // console.log(games)
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
          value={newLetter.img}
          onChange={handleChange}
          name={'img'}
          placeholder={'image'}
          
      
        />
        <TextInput
          type="text-area"
          value={newLetter.console}
          onChange={handleChange}
          name={'console'}
          placeholder={'console'}
          // 
        
        />
        <TextInput
          type="text"
          value={newLetter.rating}
          onChange={handleChange}
          name={'rating'}
          placeholder={'rating'}
         
          
        />
        <button>Submit</button>
      </form>
      <Tasks letters={letters} removeLetter={removeLetter} />
    </div>
  )
}

export default TodoList
