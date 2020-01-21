import React from 'react';
import Head from "next/head";
import {Layout} from "../components";
import fetch from 'isomorphic-unfetch'
import {format} from 'date-fns';

/**
 *
 * @param articles
 * @returns {*}
 * @constructor
 */
const HomePage = (articles) => {

  const {
    source,
    urlToImage,
    author,
    publishedAt,
    title,
    description
  } = articles[0];


  return (
    <Layout>
      <Head>
        <title>Welcome</title>
      </Head>

      <section className='section'>
        <div className='columns is-multiline'>
          <div className='column is-two-thirds'>
            <div className='article'>
              <h1 className='title is-4'>{title}</h1>
              <div>
                <img src={urlToImage} className='article__image'/>
                <p
                  className='subtitle is-7 article--credits'>By <strong>{author}</strong> from {source.name} on {format(new Date(publishedAt), 'EEEE Do MMMM yyyy pppp')}
                </p>
              </div>
              <h2 className='subtitle is-6'>{description}</h2>
            </div>
          </div>

          <div className='column'>
            <div className='columns is-multiline'>

              {Object.keys(articles).map((article, key) => {
                if (article !== 'url' && key !== 0) {
                  const {
                    source,
                    author,
                    publishedAt,
                    title,
                  } = articles[article];

                  return (<div className='column is-half-desktop is-full-tablet is-full-mobile'>
                      <div className='article'>
                        <h1 className='title is-6'>{title}</h1>
                        <div>
                          <p
                            className='subtitle is-7 article--credits'>By <strong>{author}</strong> from {source.name} on {format(new Date(publishedAt), 'EEEE Do MMMM yyyy pppp')}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};


HomePage.getInitialProps = async () => {
  try {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d6fd84244a5240e49fbabded8f5ac2b3&pageSize=10');
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
