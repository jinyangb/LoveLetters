import React, { useState } from 'react'
// import TextInput from './TextInput'
import axios from 'axios'

const Letters = () => {
  
    const [letter, setLetter] = useState(
      {
        name: '',
        date: '',
        content: ''
      }
    )
    const [letters, setLetters] = useState
  
    const handleChange = (e) => {
      console.log('test')
      setLetter({ ...newLetter, [e.target.name]: e.target.value })
  
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

  const getLetters = async () => {
    const res = await axios.get('http://localhost:3001/api/letters')
    setLetters(res.data.letters)
  }

  useEffect(() => {
    getLetters()
    
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewLetter(letter)
  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // value={newLetter.name}
          onChange={(e) => {
            handleChange(e)
          }}
          name={'Name'}
          placeholder={'Name'}
        />
        <input
          type="text"
          // value={newLetter.date}
          onChange={(e) => {
            handleChange(e)
          }}
          name={'Date'}
          placeholder={'Date'}
        />
        <input
          type="text"
          // value={newLetter.content}
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

export default Letters
