import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import PostList from './components/PostList'
import Nav from './components/Nav'
import Posts from './pages/Posts'

function App() {
  const [letters, setLetters] = useState([])
  const [newLetter, setNewLetter] = useState({
    name: '',
    date: '',
    body: ''
  })

  const addLetter = (e) => {
    e.preventDefault()
    const currentLetters = letters
    const addedLetter = {
      ...newLetter,
      id: parseInt(letters.length + 1)
    }
    currentLetters.push(addedLetter)
    setLetters(currentLetters)
    setNewLetter({
      name: '',
      date: '',
      body: ''
    })
  }
  const handleChange = (e) => {
    console.log('test')
    setNewLetter({ ...newLetter, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <header>{/* <Nav /> */}</header>
      <body>
        <Switch>
          <Route exact path="/">
            <PostList
              newLetter={newLetter}
              handleChange={handleChange}
              addGame={addLetter}
            />
          </Route>
          <Route path="/new"></Route>
        </Switch>
      </body>
    </div>
  )
}

export default App
