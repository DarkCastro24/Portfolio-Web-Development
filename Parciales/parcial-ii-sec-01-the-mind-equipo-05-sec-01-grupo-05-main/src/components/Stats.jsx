import React from 'react';
import { Link } from 'react-router-dom';

const Stats = () => {
  // Aquí podrías cargar un texto aleatorio desde una API o generar uno
  const randomText = "Este es un texto aleatorio.";

  return (
    <div>
      <h2>Estadisticas</h2>
      <p>{randomText}</p>
      <div>
        <Link to="/">Volver al inicio</Link>
      </div>
      <h1>Cambio chill</h1>
    </div>
  );
};

export default Stats;
