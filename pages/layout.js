/*eslint-disable*/
import React from "react";
import Head from "next/head";
import Footer from "./partials/footer";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Layout = props => {
  const { children } = props;

  return (
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
};

export default Layout;
