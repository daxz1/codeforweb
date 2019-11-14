import React from 'react';
import Link from 'next/link';
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
          <Link href="/netflix">
            Simple clone of the Netflix profile page. Built using Flexbox,
            React, HTML5, CSS3.
          </Link>
        </div>
        <div className="project project__movies">
          <Link href="/movies">Flexbox, React, HTML5, CSS3.</Link>
        </div>
      </section>
    </div>
  </>
);

export default Home;
