import React from 'react'

const Task = (props) => {
  return (
    <ul>
      {props.comments.map((comment, index) => (
        <li key={index}>
          <button onClick={() => props.removeComment(index)}>x</button> {comment.name}
        </li>
      ))}
    </ul>
  )
}

export default Task
