import React, { useState, useEffect, useCallback } from 'react';
import Head from "next/head";
import {
  Layout,
} from "../components";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


export default () => {

  const [light, setLight] = useState('green');
  const [isLoading, setIsLoading] = useState(false);

  async function start (order = ['red', 'amber', 'green']) {
    for (const [idx, state] of order.entries()) {
      await sleep(2000);
      setLight(state);
      await sleep(2000);
    }
  };


  const onClick = useCallback(() => {
    setIsLoading(true);
    start(['green', 'amber', 'red'])
      .then(()=> {
        setIsLoading(false);
        setLight('green');
      }).catch((e) => {
        setIsLoading(false);
    });
  });



  return (
    <Layout>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div className='traffic'>
                <div className={light === 'green' ? 'light light--green active' : 'light light--green'} />
                <div className={light === 'amber' ? 'light light--amber active' : 'light light--amber'} />
                <div className={light === 'red' ? 'light light--red active' : 'light light--red'} />
              </div>
            </div>
          </div>
          <div className='columns is-centered'>
            <div className='column is-half'>
              <button className={`button is-centered is-danger ${isLoading ? 'is-loading'  : ''}`} onClick={onClick}>
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};



