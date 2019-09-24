import React from 'react';

import '../styles/london/london.scss';

/**
 *
 * @returns {*}
 * @constructor
 */
const London = () => (
  <div className="container">
    <nav className="navigation">
      <div className="brand">
        <div className="brand__logo" />
        <div className="brand__name">Financial News</div>
      </div>
      <ul className="navigation__menu">
        <li className="menu__item"><a className="menu__link" href="/">Top Stories</a></li>
        <li className="menu__item"><a className="menu__link" href="/">News</a></li>
        <li className="menu__item"><a className="menu__link" href="/">Views</a></li>
        <li className="menu__item"><a className="menu__link" href="/">People</a></li>
        <li className="menu__item"><a className="menu__link" href="/">Brexit</a></li>
        <li className="menu__item"><a className="menu__link" href="/">Events & Awards</a></li>
      </ul>
    </nav>
    <div className="main__container">
      <header className="main__container__header">Ads</header>
      <main className="main">
        <section className="main__body">body</section>
        <aside className="main__right">right rail</aside>
      </main>
      <footer>footer</footer>
    </div>
  </div>
);

export default London;