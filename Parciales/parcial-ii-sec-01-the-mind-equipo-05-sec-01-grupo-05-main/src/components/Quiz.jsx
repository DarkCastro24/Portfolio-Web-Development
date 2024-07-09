import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import './Question.css'

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCategory, difficulty } = location.state;
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesResponse = await axios.get('https://opentdb.com/api_category.php');
      const categories = categoriesResponse.data.trivia_categories;
      
      const questionsPromises = categories.map(category =>
        axios.get(`https://opentdb.com/api.php?amount=1&category=${category.id}&difficulty=${difficulty}`)
      );
      
      const questionsResponses = await Promise.all(questionsPromises);
      const questions = questionsResponses.map(response => response.data.results[0]);
      setQuestions(questions);
    };
    
    getCategories();
  },  [selectedCategory, difficulty]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, { question: questions[currentQuestionIndex].question, answer, correctAnswer: questions[currentQuestionIndex].correct_answer }]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/review", { state: { questions, answers } });
    }
  };

  if (!questions.length) {
    return <div className='cargando'>Cargando preguntas...</div>;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div className='cont-preg'>
      <h2 className='pregunta'>{`Pregunta ${currentQuestionIndex + 1}`}</h2>
      <Question 
        question={question.question}
        difficulty={question.difficulty}
        category={question.category}
        correctAnswer={question.correct_answer}
        incorrectAnswers={question.incorrect_answers}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}

export default Quiz;