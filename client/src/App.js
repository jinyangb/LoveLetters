import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import Letters from './pages/Letters'
import Comments from './pages/Comments'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <body>
        <Switch>
          <Route exact path="/" component={Letters} />
          <Route exact path="/comments" component={Comments} />
        </Switch>
      </body>
    </div>
  )
}
export default App
