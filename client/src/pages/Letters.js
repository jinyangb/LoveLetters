import React, { useState, useEffect } from 'react'
// import TextInput from './TextInput'
import axios from 'axios'

const Letters = () => {
  const [letter, setLetter] = useState({
    name: '',
    date: '',
    content: ''
  })
  const [letters, setLetters] = useState([])

  const handleChange = (e) => {
    console.log('test')
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }

  const addNewLetter = async (letter) => {
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/api/letters`
          : 'http://localhost:3001/api/letters',
        letter
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const getLetters = async () => {
    const res = await axios.get('http://localhost:3001/api/letters')
    console.log(res)
    setLetters(res.data.letters)
  }

  useEffect(() => {
    getLetters()
  }, [letter])

  // const deleteLetter = async () => {
  //   await axios.delete(`http://localhost:3001/api/letters/${letter.id}`)
  // }

  useEffect(() => {
    async function deleteLetter() {
      await axios.delete(`http://localhost:3001/api/${letter.id}`)
      // setStatus('Delete successful')
    }

    deleteLetter()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewLetter(letter)
    getLetters()
    document.getElementById('post').reset()
  }

  return (
    <div className="list">
      <form onSubmit={handleSubmit} id="post">
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
      {letters.map(
        (letter) => (
          (<div> {letter.Name}</div>),
          (<div>{letter.Date}</div>),
          (<div>{letter.Content}</div>)
        )
      )}
      <button onClick="deleteLetter()">x</button>
    </div>
  )
}

export default Letters
