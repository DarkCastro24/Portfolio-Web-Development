import React from 'react';
import './Question.css'

function Question({ question, difficulty,category, correctAnswer, incorrectAnswers, handleAnswer }) {
  const shuffledAnswers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: question }} />
      <p>Dificultad:  
      <span dangerouslySetInnerHTML={{__html: difficulty}}/></p>
      <p>Categoria: <span dangerouslySetInnerHTML={{__html: category}}/></p>      
      <div>
        {shuffledAnswers.map((answer, index) => (
          <button className='que' key={index} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer }} />
        ))}
      </div>
    </div>
  );
}

export default Question;
