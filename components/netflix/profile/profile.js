import React, { memo } from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param name
 * @param picture
 * @returns {*}
 * @constructor
 */
const Profile = ({ name, picture }) => (
  <article
    className="profiles__profile"
    style={{ backgroundImage: `url(${picture})` }}
  >
    <div className="profile__title">{name}</div>
  </article>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default memo(Profile);
