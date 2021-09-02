import React from 'react'
import axios from 'axios'

const Letter = ({ letter }) => {
  const deleteLetter = async (id) => {
    await axios.delete(`http://localhost:3001/api/letters/${letter._id}`)
  }

  return (
    <div>
      <div> {letter.Name}</div>
      <div>{letter.Date}</div>
      <div>{letter.Content}</div>
      <button onClick={deleteLetter}>x</button>
    </div>
  )
}

export default Letter
