import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions}) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map(q => <SingleQuestion key={q.id} question={q} />)}
    </section>
  )
}

export default Questions