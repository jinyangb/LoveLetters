import React from 'react'

const Tasks = (props) => {
  return (
    <ul>
      {props.letters.map((letter, index) => (
        <li key={index}>
          <button onClick={() => props.removeLetter(index)}>x</button> {letter.name}
        </li>
      ))}
    </ul>
  )
}

export default Tasks
