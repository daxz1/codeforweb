import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Header = () => (
  <nav>
    <ul className="menu">
      <li className="logo">
        <a href="/">App</a>
      </li>
      <li className="item">
        <a href="/contact">Contact</a>
      </li>
      <li className="item">
        <a href="/about">About</a>
      </li>
      <li className="item button">
        <a href="/">Login</a>
      </li>
      <li className="toggle">
        <a href="/" />
      </li>
    </ul>
  </nav>
);

Header.propTypes = {};

export default memo(Header);
