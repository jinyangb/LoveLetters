import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Letter from '../components/Letter'
import BASE_URL from '../globals'

const Letters = () => {
  const [letter, setLetter] = useState({
    Name: '',
    Date: '',
    Content: ''
  })
  const [letters, setLetters] = useState([])

  const handleChange = (e) => {
    console.log('test')
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }

  const addNewLetter = async (letter) => {
    try {
      const res = await axios.post(`${BASE_URL}/letters`, letter)

      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const getLetters = async () => {
    const res = await axios.get(`${BASE_URL}/letters`)
    console.log(res)
    setLetters(res.data.letters)
  }

  useEffect(() => {
    getLetters()
  }, [letter])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewLetter(letter)
    getLetters()
    // document.getElementById('post').reset()
  }

  return (
    <div className="list">
      <form onSubmit={handleSubmit} id="post">
        <div className="divone">
          <input
            type="text"
            onChange={(e) => {
              handleChange(e)
            }}
            name={'Name'}
            placeholder={'Name'}
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            onChange={(e) => {
              handleChange(e)
            }}
            name={'Date'}
            placeholder={'Date'}
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            onChange={(e) => {
              handleChange(e)
            }}
            name={'Content'}
            placeholder={'Content'}
          />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <div className="letterForm">
        {letters ? letters.map((letter) => <Letter letter={letter} />) : null}
      </div>
    </div>
  )
}

export default Letters
