import React from 'react'

function Score(props) {
  return (
    <div>
      <h2>{props.date}</h2>
      <h3>{props.score}</h3>
    </div>
  )
}

export default Score
