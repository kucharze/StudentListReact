import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    <div className='student'>
      <h1>{props.name}</h1>
      <hr />
      <p>{props.bio}</p>
      <h2>Scores</h2>
      <ul>
{
        props.scores.map((item)=>{
            return <li><Score key={item.date} date={item.date} score={item.score}/></li>
        })
      }
      </ul>
      
      
    </div>
  )
}

export default Student
