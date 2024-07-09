import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div className='container'>
            <h1 className='api'>API de trivia</h1>
            <Link to="/select-category">
                <button className='iniciar'>Iniciar Quiz</button>
            </Link>
        </div>
    );
}

export default Home;
