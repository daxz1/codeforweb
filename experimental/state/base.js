import React, { Component } from 'react';
import Store from "./store";

export default class Base extends Component {
  constructor(props = {}, store) {
    super({props, store});
    let self = this;

    this.render = this.render || function() {};
    if (props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => self.forceUpdate());
    }

  }
}