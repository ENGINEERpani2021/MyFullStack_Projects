import React from "react";
import Movie from "./Movie";

const MovieSearchResultList = ({movies})=>{
    return (
        <div>
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      );
};
export default MovieSearchResultList; 