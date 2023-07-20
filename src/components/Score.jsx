import React from 'react'

function Score(props) {
  return (
    <div>
      <h1>{props.date}</h1>
      <h1>{props.score}</h1>
    </div>
  )
}

export default Score
