import React from 'react';
import Head from "next/head";
import {Layout} from "../components";
import fetch from 'isomorphic-unfetch'
import { format} from 'date-fns';

/**
 *
 * @param articles
 * @returns {*}
 * @constructor
 */
const HomePage = (articles) => {
  return (
    <Layout>
      <Head>
        <title>Welcome</title>
      </Head>

      <section className="section">
        <div className="columns is-multiline">
          {Object.keys(articles).map((article, key) => {
            const {
              source,
              urlToImage,
              author,
              publishedAt,
              title,
              description
            } = articles[article];

            return (
              <div className={key === 0 || key === 3 ? 'column is-two-thirds' : 'column'}>
                {key === 0 &&
                <div className='columns is-multiline hero--custom'>
                  <div className='column is-one-third'>
                    <h1 className='title is-4'>{title}</h1>
                    <h2 className='subtitle is-6'>{description}</h2>
                    <p className='subtitle is-7'>By <strong>{author}</strong> from {source.name} on {format( new Date(publishedAt), 'EEEE Do MMMM yyyy pppp')}</p>
                  </div>
                  <div className='column'>
                    <img src={urlToImage}/>
                  </div>
                </div>
                }
                {key >= 1 &&
                <div>{description}</div>
                }
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
};


HomePage.getInitialProps = async () => {
  try {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d6fd84244a5240e49fbabded8f5ac2b3&pageSize=3');
    const {status, articles} = await res.json();

    if (status === 'ok') {
      return articles;
    }
    return {};
  } catch (e) {
    console.log(e);
    return {};
  }
};

export default HomePage
