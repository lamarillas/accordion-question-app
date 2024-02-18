import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions, activeId, activeQuestionId}) => {

  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map(q => 
        <SingleQuestion key={q.id} {...q} 
          activeId={activeId}
          activeQuestionId={activeQuestionId} />)}
    </section>
  )
}

export default Questions