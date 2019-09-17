import React, { memo } from 'react';
import PropTypes from 'prop-types';

/**
 * Hero Component
 * @param url
 * @param heroTitle
 */
const Hero = ({
  cosmic: {
    metadata: {
      hero_image: { url },
      hero_title: heroTitle,
    },
  },
}) => (
  <section className="hero" style={{ backgroundImage: `url(${url})` }}>
    <a className="hero__logo" href="/">
      CFW
    </a>
    <header className="hero__header">
      <h1 className="hero__title">{heroTitle}</h1>
    </header>
  </section>
);

Hero.propTypes = {
  cosmic: PropTypes.shape({
    metadata: PropTypes.shape({
      hero_image: PropTypes.shape({
        url: PropTypes.string,
      }),
      hero_title: PropTypes.string,
    }),
  }).isRequired,
};

export default memo(Hero);
