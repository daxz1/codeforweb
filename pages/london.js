import React from 'react';

import '../styles/london/london.scss';

const ARTICLE_COLUMN_ONE = [
  {
    title: 'A year after the mutiny, HSBC plots its next investment banking overhaul',
    snippet: 'Former JPMorgan executive Greg Guyett is the latest to try his hand at helping HSBC win a bigger share of global investment banking fees',
    tags: ['Interactive', 'Asset Management', 'Brexit'],
  },
  {
    title: 'CEOs of London and Hong Kong exchanges set out clashing visions',
    snippet: 'David Schwimmer and Charles Li appeared in consecutive interviews at Sibos',
    tags: ['London Stock Exchange', 'M&A', 'Trading'],
    img: 'https://si.wsj.net/public/resources/images/FN-AI236_FN_LI_E_20190924101130.jpg',

  },
];

const ARTICLE_COLUMN_TWO = [
  {
    title: 'A year after the mutiny, HSBC plots its next investment banking overhaul',
    snippet: 'Former JPMorgan executive Greg Guyett is the latest to try his hand at helping HSBC win a bigger share of global investment banking fees',
    tags: ['Interactive'],
    img: 'https://si.wsj.net/public/resources/images/FN-AI180_FN_JPM_D_20190918054222.jpg',
  },
];

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
            {ARTICLE_COLUMN_ONE.map((article) => {
              const {
                img = '',
                title,
                snippet,
                tags,
              } = article;
              return (
                <article>
                  {img && <img src={img} alt="" />}
                  <h3>{title}</h3>
                  <p>{snippet}</p>
                  <div className="tags">
                    <ul>
                      {tags.map((tag) => (<li>{tag}</li>))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="column__two">
            {ARTICLE_COLUMN_TWO.map((article) => {
              const {
                img = '',
                title,
                snippet,
                tags,
              } = article;

              return (
                <article>
                  {img && <img src={img} alt="" />}
                  <h3>{title}</h3>
                  <p>{snippet}</p>
                  <div className="tags">
                    <ul>
                      {tags.map((tag) => (<li>{tag}</li>))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <aside className="main__right">
          <h3>Filter by Topic</h3>
          <div className="tags">
            <ul>
              <li>Interactive</li>
              <li>Asset Management</li>
              <li>Lists</li>
              <li>ETFs</li>
              <li>Regulation</li>
              <li>FinTech</li>
              <li>Trading</li>
              <li>Real Estate</li>
              <li>Web Casts</li>
            </ul>
          </div>
        </aside>
      </main>
      <footer className="footer">
        <div className="column__one">
          <address>
            © 2019 FINANCIAL NEWS
            {' '}
            <br />
            The News Building
            {' '}
            <br />
            1 London Bridge Street
            {' '}
            <br />
            London, SE1 9GF
            {' '}
            <br />
          </address>
        </div>
        <div className="column__two">
          <strong>Profile</strong>
          <ul>
            <li>Subscribe</li>
            <li>Sign In</li>
            <li>Reset Password</li>
          </ul>
        </div>
        <div className="column__three">
          <strong>About</strong>
          <ul>
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Copyright Licenses</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms & Conditions</li>
            <li>Corrections</li>
            <li>Tips</li>
          </ul>
        </div>
        <div className="column__four">
          <strong>Sections</strong>
          <ul>
            <li>News</li>
            <li>Views</li>
            <li>People</li>
            <li>Brexit</li>
            <li>Asset Management</li>
            <li>Investment Banking</li>
            <li>Trading</li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
);

export default London;
