import React from 'react'
import axios from 'axios'

const Letter = ({ letter }) => {
  const deleteLetter = async (id) => {
    await axios.delete(`http://localhost:3001/api/letters/${letter._id}`)
    window.location.reload()
  }

  return (
    <div>
      <br />
      <div> {letter.Name}</div>
      <br />
      <div>{letter.Date}</div>
      <br />
      <div>{letter.Content}</div>
      <br />
      <button onClick={deleteLetter}>Hide Forever</button>
      <br />
    </div>
  )
}

export default Letter
