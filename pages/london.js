import React from 'react';
import { ArticleSnippet, SharedHead } from '../components';

import '../styles/london/london.scss';

const ARTICLE_COLUMN_ONE = [
  {
    title:
      'A year after the mutiny, HSBC plots its next investment banking overhaul',
    snippet:
      'Former JPMorgan executive Greg Guyett is the latest to try his hand at helping HSBC win a bigger share of global investment banking fees',
    tags: ['Interactive', 'Asset Management', 'Brexit'],
  },
  {
    title: 'CEOs of London and Hong Kong exchanges set out clashing visions',
    snippet:
      'David Schwimmer and Charles Li appeared in consecutive interviews at Sibos',
    tags: ['London Stock Exchange', 'M&A', 'Trading'],
    img:
      'https://si.wsj.net/public/resources/images/FN-AI236_FN_LI_E_20190924101130.jpg',
  },
  {
    title: 'Helena Morrissey in the running for Bank of England job',
    snippet:
      'Dame Morrissey is reportedly one of nine candidates interviewed for the role',
    tags: ['Trading', 'HFT'],
  },
  {
    title:
      '‘Huge number’ of smaller finance companies not ready for Brexit, says MEP',
    snippet:
      'Speaking at a Labour Party conference fringe event, Neena Gill cautioned that Brexit-related job cuts in financial services would be felt not only in London',
    tags: ['Brexit', 'Politics'],
  },
];

const ARTICLE_COLUMN_TWO = [
  {
    title: 'Solomon marks anniversary at Goldman with leadership reshuffle',
    snippet:
      'Promotions include new female chairs for investment banking and asset management divisions',
    tags: ['Interactive'],
    img:
      'https://si.wsj.net/public/resources/images/FN-AI180_FN_JPM_D_20190918054222.jpg',
  },
  {
    title:
      '‘Like a TV courtroom drama come to life’: City reacts to unlawful closure of Parliament',
    snippet:
      'The UK Supreme Court rules that the prime minister should not have asked the Queen to prorogue Parliament',
    tags: ['Brexit', 'Economics', 'Politics'],
    img:
      'https://si.wsj.net/public/resources/images/FN-AI232_FN_MIL_GR_20190924062005.jpg',
  },
];

const NAVIGATION = [
  {
    path: '/',
    title: 'Top Stories',
  },
  {
    path: '/',
    title: 'News',
  },
  {
    path: '/',
    title: 'Views',
  },
  {
    path: '/',
    title: 'People',
  },
  {
    path: '/',
    title: 'Brexit',
  },
  {
    path: '/',
    title: 'Events & Awards',
  },
];


/**
 *
 * @returns {*}
 * @constructor
 */
const London = () => (
  <>
  <SharedHead title="FNLondon Example" />
  <div className="container">
    <nav className="navigation">
      <div className="brand">
        <div className="brand__logo" />
        <div className="brand__name">Financial News</div>
      </div>
      <ul className="navigation__menu">
        {NAVIGATION.map((nav) => {
          const { title, path } = nav;
          return (
            <li key={path} className="menu__item">
              <a className="menu__link" href={path}>
                {title}
              </a>
            </li>
          );
        })}
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
                img = '', title, snippet, tags,
              } = article;
              return (
                <ArticleSnippet
                  snippet={snippet}
                  tags={tags}
                  img={img}
                  title={title}
                />
              );
            })}
          </div>
          <div className="column__two">
            {ARTICLE_COLUMN_TWO.map((article) => {
              const {
                img = '', title, snippet, tags,
              } = article;
              return (
                <ArticleSnippet
                  snippet={snippet}
                  tags={tags}
                  img={img}
                  title={title}
                />
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
  </>
);

export default London;
