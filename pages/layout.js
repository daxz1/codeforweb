/*eslint-disable*/
import React from 'react';
import Head from 'next/head';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Droid+Serif"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>Code For Web</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
