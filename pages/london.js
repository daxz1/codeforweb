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
        <li className="menu__item">
          <a className="menu__link" href="/">
            Top Stories
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            News
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            Views
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            People
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            Brexit
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            Events & Awards
          </a>
        </li>
      </ul>
    </nav>
    <div className="main__container">
      <header className="main__container__header">
        <div className="register">
          <div className="register__content">
            <div>
              <p>
                Become a member. Join to access the insight and analysis
                powering the financial sector.
              </p>
            </div>
            <div className="button__container">
              <a className="button" href="/">
                Sign In
              </a>
              <a className="button button--alternative" href="/">
                Subscribe
              </a>
            </div>
          </div>
        </div>

        <div className="advert">
          <img src="../static/london/62643.jpg" alt="Ads" />
        </div>
      </header>


      <main className="main">
        <section className="main__body">
          <div className="column__one">
            <article>
              <h3>A year after the mutiny, HSBC plots its next investment banking overhaul</h3>
              <p>
Former JPMorgan executive Greg Guyett is the latest to try his hand at helping HSBC win a bigger share
                of global investment banking fees
              </p>
              <div className="tags">
                <ul>
                  <li>Interactive</li>
                  <li>Asset Management</li>
                </ul>
              </div>
            </article>
            <article>
              <h3>A year after the mutiny, HSBC plots its next investment banking overhaul</h3>
              <p>
Former JPMorgan executive Greg Guyett is the latest to try his hand at helping HSBC win a bigger share
                of global investment banking fees
              </p>
              <div className="tags">
                <ul>
                  <li>Interactive</li>
                  <li>Asset Management</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="column__two">
            <article>
              <h3>A year after the mutiny, HSBC plots its next investment banking overhaul</h3>
              <p>
Former JPMorgan executive Greg Guyett is the latest to try his hand at helping HSBC win a bigger share
                of global investment banking fees
              </p>
              <div className="tags">
                <ul>
                  <li>Interactive</li>
                  <li>Asset Management</li>
                </ul>
              </div>
            </article>
            <article>
              <h3>A year after the mutiny, HSBC plots its next investment banking overhaul</h3>
              <p>
Former JPMorgan executive Greg Guyett is the latest to try his hand at helping HSBC win a bigger share
                of global investment banking fees
              </p>
              <div className="tags">
                <ul>
                  <li>Interactive</li>
                  <li>Asset Management</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <aside className="main__right">right rail</aside>
      </main>
      <footer>footer</footer>
    </div>
  </div>
);

export default London;
