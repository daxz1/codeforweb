import React, { memo } from 'react';

const Header = () => (
  <nav>
    <ul className="navigation__menu">
      <li className="navigation__logo">
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
    </ul>
  </nav>
);

export default memo(Header);
