import React from 'react';
import Store from '../experimental/state/store';
import actions from '../experimental/state/actions';
import mutations from "../experimental/state/mutations";
import Base from "../experimental/state/base";

let id = 0;

const store = new Store({
  actions,
  state: {
    items: [
      {
        id: id++,
      }
    ]
  },
  mutations
});

export default class Custom extends Base {
  constructor(props) {
    super({props, store});
  }

  onClick () {
    store.dispatch('add', { id: id++ });
  }

  render () {

    if(store.state.items.length === 0) {
      return(<p class="no-items">You've done nothing yet &#x1f622;</p>);
    }

    return (
      <div style={{fontFamily: 'courier', fontSize: '11px'}}>
        <p>This page demonstrates a custom store built in Vanilla JS.</p>
        <p>Sources:</p>
        <p>
          <a href='https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/'>
            Build a state management system with vanilla JavaScript
          </a>
        </p>
        <br />
        <button onClick={this.onClick}>Add</button>
        <br /> <br />
        {
          store.state.items.map((item) => {
            return <div>{`{id: ${item.id}}`}</div>
          })
        }
      </div>
    )


  }
}