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
    <article key={_id}>
      <h2>{title}</h2>
      <div
        className="blog__teaser droid"
        dangerouslySetInnerHTML={{ __html: teaser }}
      />
      <div className="blog__read-more">
        <a href={`/${slug}`}>Read more...</a>
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
