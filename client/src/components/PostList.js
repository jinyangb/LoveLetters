import React, { useState } from 'react'

const PostList = (newLetter, handleChange) => {
  const [newLetter, setNewLetter] = useState({
    Name: '',
    Date: '',
    Content: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setNewLetter({ ...newLetter, [e.target.name]: e.target.value })
  }

  return (
    <div>
      newLetter={newLetter}
      handleChange=
      {(e) => {
        handleChange(e)
      }}
    </div>
  )
}

export default PostList
