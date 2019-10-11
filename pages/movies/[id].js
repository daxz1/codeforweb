import React from 'react';
import { useRouter } from 'next/router';
import { Player, BigPlayButton } from 'video-react';
import { CONFIG } from '../../data/movies/movies';
import '../../public/static/movies/style.css'; // import css

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const movie = CONFIG.filter((config) => config.IMDB === id);

  if (movie.length < 1) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <Player preload="auto" src={movie[0].CDN} fluid={false}>
        <BigPlayButton position="center" />
      </Player>
    </div>
  );
};
