import React from 'react';
import { movies } from '../data';

const Movies = () => {

  console.log(movies)
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map(movie => {
          return <div key={movie.title}>
            <p>Title: {movie.title}</p>
            <p>Time: {movie.time}</p>
            <ul>
              {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
          </div>
          })}
    </div>
  );
};

export default Movies;
