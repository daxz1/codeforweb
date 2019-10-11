/*global fetch */
import React, { useState, useEffect } from 'react';

// http://www.omdbapi.com/?i=tt3896198&apikey=90e7dea

const CONFIG = [
  {
    IMDB: 'tt3104988',
    CDN: 'https://cdn.filestackcontent.com/H028WmimTXi3Nx9G9azk',
  },
  {
    IMDB: 'tt6806448',
    CDN: 'https://cdn.filestackcontent.com/lLbUqxnRPO5FMULdCwXM',
  },
];

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetcher = async ({ IMDB }) => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${IMDB}&apikey=90e7dea`,
      );
      return response.json();
    };

    CONFIG.map(async (movie) => {
      const { IMDB, CDN } = movie;
      const info = await fetcher({ IMDB });
      setMovies((oldMovies) => [...oldMovies, { ...info, CDN }]);
    });
  }, []);

  if (!movies) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {movies.map((movie) => {
        const { Title: title, CDN, Poster: poster } = movie;
        return (
          <div key={title}>
            <a href={CDN}>
              <img src={poster} alt={title} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
