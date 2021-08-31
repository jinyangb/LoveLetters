import React from 'react'

const Tasks = (props) => {
  return (
    <ul>
      {props.games.map((game, index) => (
        <li key={index}>
          <button onClick={() => props.removeGame(index)}>x</button> {game.name}
        </li>
      ))}
    </ul>
  )
}

export default Tasks
