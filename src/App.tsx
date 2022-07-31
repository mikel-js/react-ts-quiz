import React from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startQuiz = async () => {};

  const checkAnswer = () => {};
  // const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  // const nextQuestion = (e: MouseEvent<HTMLButtonElement>) => {};
  return (
    <div className='App'>
      <h1>Quiz Game</h1>
      <button className='start' onClick={startQuiz}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading...</p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
