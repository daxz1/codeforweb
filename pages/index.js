import React from 'react';
import { SharedHead } from '../components';
import '../styles/global/styles.scss';

/**
 * Home Component
 * @returns {*}
 * @constructor
 */
const Home = () => (
  <>
    <SharedHead title="Code For Web" />
    <div className="home">
      <section className="projects">
        <div className="project project__netflix">
          <a href="/netflix">
            Simple clone of the Netflix profile page. Built using Flexbox,
            React, HTML5, CSS3.
          </a>
        </div>
        <div className="project project__fnlondon">
          <a href="/london">
            Simple clone of FN London homepage - Incomplete. Built using
            Flexbox, React, HTML5, CSS3.
          </a>
        </div>
      </section>
    </div>
  </>
);

export default Home;
