import React from 'react';
import Router from 'next/router';

const Error = () => {
  <div>Coming Soon</div>;
};

/**
 *
 * @param res
 * @param err
 * @returns {{statusCode: *}}
 */
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;

  if (res) {
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
