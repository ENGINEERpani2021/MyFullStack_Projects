import logo from './logo.svg';
import './App.css';
import React from 'react';
import MovieSearchEngine from './Components/MovieSearchEngine';

const App = () => {
  return (
    <div className="App">
      <h1>Movie Browser</h1>
      <MovieSearchEngine />
    </div>
  );
};

export default App;