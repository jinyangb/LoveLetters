import React from 'react'
import axios from 'axios'
import BASE_URL from '../globals'

const Letter = ({ letter }) => {
  const deleteLetter = async (id) => {
    await axios.delete(`${BASE_URL}/letters/${letter._id}`)
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
