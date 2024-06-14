import React from "react";

const Movie = ({movie}) =>{
    console.log({movie});
    return(
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </div>
    );
};
export default Movie; 