/* global fetch */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { withRedux } from '../../lib/redux';
import '../../styles/movies/movies.scss';
import { CONFIG } from '../../data/movies/movies';

/**
 *
 * @returns {*}
 * @constructor
 */
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
    <div className="container">
      {movies.map((movie) => {
        const {
          Title: title,
          Poster: poster,
          imdbID: imdb,
          Actors: actors,
        } = movie;
        return (
          <div key={title} className="movie">
            <Link href={`/movies/${imdb}`}>
              <a>
                <img src={poster} alt={title} />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default withRedux(Movies);
