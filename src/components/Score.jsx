import React from 'react'

function Score(props) {
  return (
    <div className='score'>
      <h2>Date: {props.date}</h2>
      <h3>Score: {props.score}</h3>
    </div>
  )
}

export default Score
