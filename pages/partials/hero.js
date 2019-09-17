import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {*[]}
 * @constructor
 */
const Hero = (props) => {
  const {
    cosmic: {
      metadata: {
        hero_image: { url },
        hero_title: heroTitle,
      },
    },
  } = props;

  return (
    <section className="hero" style={{ backgroundImage: `url(${url})` }}>
      <header id="header">
        <a id="logo" href="/">
          CFW
        </a>
      </header>
      <header className="hero-header">
        <h1 className="hero-title">{heroTitle}</h1>
      </header>
      <footer className="hero-footer" />
    </section>
  );
};

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

export default Hero;
