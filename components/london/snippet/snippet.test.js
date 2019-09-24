/* global describe, it, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import Snippet from './snippet';

describe('[RENDER] components/london/snippet/snippet.js', () => {
  it('Header Component renders', () => {
    const component = renderer.create(
      <Snippet
        img=""
        title="A year after the mutiny, HSBC plots its next investment banking overhaul"
        snippet="Former JPMorgan executive Greg Guyett is the latest to try his hand at helping HSBC win a bigger share of global investment banking fees"
        tags={['Interactive', 'Asset Management', 'Brexit']}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
