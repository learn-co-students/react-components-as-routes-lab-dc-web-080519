import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log('movies = ' ,movies)

  return (
    <div>
    <h1>Movies Page</h1>

        {movies.map(movie => {
          let {title, time, genres} = movie
          return <div key={title}>
            <h3>{`Name: ${title}`}</h3>
            <p>{`Time: ${time}`}</p>
            Genres:
            <ul>
              {genres.map(genre => <li key={movie + '-' + genre}>{genre}</li>)}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
