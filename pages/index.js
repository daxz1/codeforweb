import React from 'react';
import '../styles/global/styles.scss';

/**
 * Home Component
 * @returns {*}
 * @constructor
 */
const Home = () => (
  <>
    <div className="home">
      <section className="projects">
        <div className="project project__netflix">
          <a href="/netflix">
            Flexbox, React, HTML5, CSS3: Simply clone of the profile page.
          </a>
        </div>
        <div className="project project__fnlondon">
          <a href="/london">
            Flexbox, React, HTML5, CSS3: Simply clone of the homepage
          </a>
        </div>
      </section>
    </div>
  </>
);

export default Home;
