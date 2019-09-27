import React from 'react';
import Router from 'next/router';

const Error = () => <div>Coming to you</div>;

/**
 * @todo Need to clean this up.
 * @param res
 * @returns {{statusCode: *}}
 */
Error.getInitialProps = ({ res }) => {
  if (res) {
    const { statusCode } = res;

    if (statusCode === 404) {
      res.writeHead(302, {
        Location: '/home',
      });
      return res.end();
    }
  }
  return {};
};

export default Error;
