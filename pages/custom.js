import React from 'react';
import Store from '../experimental/state/store';
import actions from '../experimental/state/actions';
import mutations from "../experimental/state/mutations";
import Base from "../experimental/state/base";
import Head from "next/head";
import {
  Layout,
  HeroArticle
} from "../components";

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

  onClickAdd () {
    store.dispatch('add', { id: id++ });
  }

  onClickRemove () {
    store.dispatch('remove');
  }

  render () {

    return (
      <Layout>
        <Head>
          <title>Code For Web: Vanilla JS Store</title>
        </Head>
        <section className='section lalal'>
          <div className='columns'>
            <div className='column'>
              <div style={{fontFamily: 'courier', fontSize: '11px'}}>
                <p>This page demonstrates a custom store built in Vanilla JS.</p>
                <p>Sources:</p>
                <p>
                  <a href='https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/'>
                    Build a state management system with vanilla JavaScript
                  </a>
                </p>
                <br />
                <button onClick={this.onClickAdd}>Add</button>
                <button onClick={this.onClickRemove}>Remove</button>
                <br /> <br />
                {
                  store.state.items.map((item) => {
                    return <div>{`{id: ${item.id}}`}</div>
                  })
                }
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )


  }
}