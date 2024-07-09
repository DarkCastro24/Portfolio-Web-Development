import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Question.css'

function Selection() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
      .then(response => {
        setCategories(response.data.trivia_categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const startQuiz = () => {
    navigate(`/quiz`, { state: { selectedCategory, difficulty } });
  };

  return (
    <div className='cat-con'>
      <h1 className='categoria'>Seleccionar la dificultad del Quiz</h1>
      <select className='opt' onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
        <option value="easy">Facil</option>
        <option value="medium">Medio</option>
        <option value="hard">Dificil</option>
      </select>
      <button className='iniciar' onClick={startQuiz}>Iniciar quiz</button>
    </div>
  );
}

export default Selection;
