import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import '../assets/css/Review.css'

function Review() {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || {};
  useEffect(() => {
    if (answers) {
      const attempt = {
        answers,
        timestamp: new Date().toISOString()
      };
      const attempts = JSON.parse(localStorage.getItem('quizAttempts')) || [];
      attempts.push(attempt);
      localStorage.setItem('quizAttempts', JSON.stringify(attempts));
    } else {
      navigate('/');
    }
  }, [answers, navigate]);

  const goToHistory = () => {
    navigate('/history');
  };

  if (!answers) {
    return null;
  }

  return (
    <div>
      <h1>Resultados del Quiz</h1>
      <ul>
        {answers.map((answer, index) => (
          <li key={index} style={{ color: answer.answer === answer.correctAnswer ? 'green' : 'red' }}>
            Pregunta: <span dangerouslySetInnerHTML={{ __html: answer.question }} />
            <br />
            Tu respuesta: <span dangerouslySetInnerHTML={{ __html: answer.answer }} />
            <br />
            {answer.answer !== answer.correctAnswer && (
              <>
                Respuesta correcta: <span dangerouslySetInnerHTML={{ __html: answer.correctAnswer }} />
              </>
            )}
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Regresar al menu</button>
      </Link>
      <button onClick={goToHistory}>Ver Historial</button>
    </div>
  );
}

export default Review;