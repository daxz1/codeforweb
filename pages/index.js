import React from 'react';
import Head from "next/head";
import {
  Layout,
  HeroArticle
} from "../components";
import fetch from 'isomorphic-unfetch'
import {format} from 'date-fns';

/**
 *
 * @param articles
 * @returns {*}
 * @constructor
 */
const HomePage = ({heroArticle, leftArticles, rightArticles}) => {
  return (
    <Layout>
      <Head>
        <title>Welcome</title>
      </Head>

      <section className='section'>
        <div className='columns is-multiline'>
          <div className='column is-two-thirds'>
            <h1 className='title is-4 is-dark'>Breaking News</h1>
            <HeroArticle article={heroArticle}/>

            <h3 className='title is-4 is-dark'>Europe</h3>
            <div className='columns is-multiline'>
              {Object.keys(leftArticles).map((article, key) => {
                if (article !== 'url' && key !== 0) {
                  const {
                    source,
                    author,
                    publishedAt,
                    title,
                  } = leftArticles[article];

                  return (
                    <div className='column is-full' key={Math.round(Math.random() * 1000000)}>
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


          <div className='column'>
            <div className='columns is-multiline'>
              {Object.keys(rightArticles).map((article, key) => {
                if (article !== 'url' && key !== 0) {
                  const {
                    source,
                    author,
                    publishedAt,
                    title,
                    urlToImage
                  } = rightArticles[article];

                  return (
                    <div className='column is-half-desktop is-full-tablet is-full-mobile' key={Math.round(Math.random() * 1000000)}>
                      <div className='article'>
                        <h1 className='title is-6'>{title}</h1>
                        <div>
                          <img src={urlToImage} className='article__image'/>
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
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d6fd84244a5240e49fbabded8f5ac2b3');
    const {
      status,
      articles
    } = await res.json();

    if (status === 'ok') {
      const right = Math.floor(articles.length / 2);
      const rightArticles = articles.slice(0, right - 1);
      const leftArticles = articles.slice(right - 1, articles.length);
      return {
        rightArticles,
        leftArticles,
        heroArticle: articles[0]
      };

    }
    return {};
  } catch (e) {
    console.log(e);
    return {};
  }
};

export default HomePage
