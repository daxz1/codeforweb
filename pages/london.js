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
        Side bar
    </nav>
    <div className="main__container">
      <header className="main__container__header">
        Ads
      </header>
      <main className="main">
        <section className="main__body">
            body
        </section>
        <aside className="main__right">
            right rail
        </aside>
      </main>
      <footer>
        footer
      </footer>
    </div>
  </div>
);

export default London;
