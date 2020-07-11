import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>

      {actors.map(actor => {
          let {name, movies} = actor
        return <div key={name}>
          <h3>Name: {name}</h3>
          Movies:
          <ul>
            {movies.map(movie => <li key={movie}>{movie}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
