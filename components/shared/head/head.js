import React, { memo } from 'react';
import H from 'next/head';

/**
 *
 * @param title
 * @returns {*}
 * @constructor
 */
const Head = ({ title }) => (
  <H>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    <title>{title}</title>
  </H>
);

export default memo(Head);
