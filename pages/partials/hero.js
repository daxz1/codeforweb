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
    <div className="hero" style={{ backgroundImage: `url(${url})` }}>
      <h1>{heroTitle}</h1>
    </div>
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
