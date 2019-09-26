import React from 'react';
import Router from 'next/router';

const Error = () => (<div>Coming Soon</div>);

/**
 * @todo Need to clean this up.
 * @param res
 * @param err
 * @returns {{statusCode: *}}
 */
Error.getInitialProps = ({ res, err }) => {
  if (res) {
    const statusCode = err ? err.statusCode : null;

    if (statusCode === 404) {
      res.writeHead(302, {
        Location: '/home',
      });
      res.end();
    }
  } else {
    Router.push('/home');
  }
  return {};
};

export default Error;
