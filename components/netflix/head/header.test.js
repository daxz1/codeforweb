/* global describe, it, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

describe('[RENDER] components/netflix/head/header.js', () => {
  it('Header Component renders', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
