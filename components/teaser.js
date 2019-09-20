/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Teaser = (props) => {
  const {
    post: {
      _id,
      slug,
      title,
      metadata: { teaser },
    },
  } = props;
  return (
    <article key={_id} className="teaser">
      <h2 className="teaser__title">{title}</h2>
      <div
        className="teaser__teaser"
        dangerouslySetInnerHTML={{ __html: teaser }}
      />
      <div className="teaser__more">
        <a href={`/article/${slug}`}>Read more</a>
      </div>
    </article>
  );
};

Teaser.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    metadata: PropTypes.shape({
      teaser: PropTypes.string,
    }),
  }).isRequired,
};

export default Teaser;
