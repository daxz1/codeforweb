/*global describe, expect */
import React from 'react';
import { Ball } from './ball';
import renderer from 'react-test-renderer';

describe('BALL TEST SUITE', ()=> {
  it('Ball Renders Correctly', () => {
    const tree = renderer.create(<Ball x="0" y="0" fill="#fffff" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});