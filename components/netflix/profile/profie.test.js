/* global describe, it, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './profile';

describe('[RENDER] components/netflix/profile/profile.js', () => {
  it('Header Component renders', () => {
    const component = renderer.create(<Profile name="Morwen" picture="https://occ-0-299-300.1.nflxso.net/art/c83fe/6c218aba13637fff1554e17c73c4e2481e6c83fe.png" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
