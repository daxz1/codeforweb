/* global fetch */
import React, { useState, useEffect } from 'react';
import '../../styles/movies/movies.scss';
import { CONFIG } from '../../data/movies/movies';

export default () => {
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
    <div className="container">
      {movies.map((movie) => {
        const {
          Title: title, Poster: poster, imdbID: imdb,
        } = movie;
        return (
          <div key={title} className="movie">
            <a href={`/movies/${imdb}`}>
              <img src={poster} alt={title} />
            </a>
          </div>
        );
      })}
    </div>
  );
};
