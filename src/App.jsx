import React, { useState } from 'react'
import data from './data'
import Questions from './components/Questions';

const App = () => {

  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const activeQuestionId = (id) => {
    
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);

  }

  return (
    <main>
      <Questions questions={questions} activeId={activeId} activeQuestionId={activeQuestionId}/>
    </main>
  )
}

export default App