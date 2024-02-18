import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({id, title, info, activeId, activeQuestionId}) => {

  // const [showInfo, setShowInfo] = useState(open);

  const isActive = id === activeId;


  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => {activeQuestionId(id)}}>
          {!isActive ? <AiOutlinePlus /> : <AiOutlineMinus /> }
        </button>
      </header>
      { isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion