import React from 'react';
import { Link } from 'react-router-dom';

function History() {
    const attempts = JSON.parse(localStorage.getItem('quizAttempts')) || [];
    return (
        <div>
            <h1>Historial de Intentos del Quiz</h1>
            {attempts.length > 0 ? (
                <ul>
                    {attempts.map((attempt, index) => (
                        <li key={index}>
                            <div>
                                <p>Fecha del intento: {new Date(attempt.timestamp).toLocaleString()}</p>
                                <p>Preguntas correctas: {
                                    attempt.answers.filter(answer => answer.answer === answer.correctAnswer).length
                                } de {attempt.answers.length}</p>
                            </div>
                            <div>
                                <ul>
                                    {attempt.answers.map((answer, index) => (
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
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay intentos guardados en el historial.</p>
            )}
            <Link to="/">Regresar al menú</Link>
        </div>
    );
}

export default History;