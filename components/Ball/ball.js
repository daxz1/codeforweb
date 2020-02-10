import React from 'react';

/**
 *
 * @param x
 * @param y
 * @param fill
 * @returns {*}
 * @constructor
 */
export const Ball = ({ x, y, fill }) => (<circle cx={x} cy={y} r={5} fill={fill}/>);