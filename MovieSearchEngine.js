import { useState } from 'react';
import MovieAPIService from '../MovieAPIService';
import MovieSearchResultList from "./MovieSearchResultList";

function MovieSearchEngine() {
  const [query,setSearchQuery] = useState("");
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [movies, setMovies] = useState([]);
  const handleSearch = (event) => {
    event.preventDefault();
    MovieAPIService.getMovies(query,genre,rating).then(data => {
      setMovies(data.results);}).catch(error => {
      console.error('Error fetching movies:', error);
    });
  };
  
  return (
    <div className="App">
      <h1>Streamify</h1>
      <h3>Search for the movie below</h3>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search" onChange={(event)=>setSearchQuery(event.target.value)} 
        value={query}/><br/>
        <input type="text" value={genre}
        onChange={(e) => setGenre(e.target.value)} placeholder="Genre ID"/>
        <input type="number" value={rating}
        onChange={(e) => setRating(e.target.value)} placeholder="Minimum Rating"/>
        <input type="submit" /> 
      </form>
      {movies.length > 0 && <MovieSearchResultList movies={movies} />}
    </div>
  );
};

export default MovieSearchEngine;
