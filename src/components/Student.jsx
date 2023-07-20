import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    <div className=''>
      <h1>{props.name}</h1>
      <hr />
      <h3>{props.bio}</h3>
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
