import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import PostList from './components/PostList'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <body>
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route></Route>
        </Switch>
      </body>
    </div>
  )
}

export default App
