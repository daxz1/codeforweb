import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Footer from './footer';

/**
 * Layout Component
 * @param children
 * @returns {*}
 * @constructor
 */
const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <title>Code For Web</title>
    </Head>
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
