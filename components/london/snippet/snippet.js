import React, { memo } from 'react';
import PropTypes from 'prop-types';

/**
 * Snippet Component
 * @param img
 * @param title
 * @param snippet
 * @param tags
 * @returns {*}
 * @constructor
 */
const Snippet = ({
  img = '', title, snippet, tags,
}) => (
  <article>
    {img && <img src={img} alt="" />}
    <h3>{title}</h3>
    <p>{snippet}</p>
    <div className="tags">
      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  </article>
);

Snippet.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default memo(Snippet);
