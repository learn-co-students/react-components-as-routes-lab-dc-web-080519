import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log('directors = ', directors)


  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(director => {
          let {name, movies} = director
          return <div key={name}>
            <h3>{`Name: ${name}`}</h3>
            Movies:
            <ul>
            {movies.map(movie => <li key={name + '-' + movie}>{movie}</li>)}
            </ul>
          </div>})}

    </div>
  );
}

export default Directors
