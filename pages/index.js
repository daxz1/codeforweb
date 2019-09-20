/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import consola from 'consola';
import axios from 'axios';
import _ from 'lodash';
import config from '../config';
import { Hero, Teaser, Layout } from '../components';

// import '../styles/global/styles.scss';

/**
 * Homepage Component
 * @param props
 * @returns {*}
 * @constructor
 */
const Home = (props) => {
  const { global, posts } = props;
  if (!global) {
    return <div className="flash">Loading</div>;
  }
  const { hero } = global;
  return (
    <Layout cosmic={props}>
      <Hero cosmic={hero} />
      {[...posts].map((post) => (
        <Teaser key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

Home.propTypes = {
  global: PropTypes.shape({
    hero: PropTypes.object.isRequired,
  }).isRequired,
  posts: PropTypes.array.isRequired,
};

Home.getInitialProps = async () => {
  const query = `{
      getObjects(bucket_slug: "${config.bucket.slug}", input: {
        read_key: "${config.bucket.read_key}"
      })
      {
        _id
        type_slug
        slug
        title
        metadata
        created_at
      }
    }`;
  return axios
    .post('https://graphql.cosmicjs.com/v1', { query })
    .then((response) => {
      const {
        data: {
          data: { getObjects },
        },
      } = response;

      return {
        posts: _.filter(getObjects, {
          type_slug: 'posts',
        }),
        global: _.keyBy(_.filter(getObjects, { type_slug: 'globals' }), 'slug'),
      };
    })
    .catch((error) => {
      consola.error(error);
    });
};

export default Home;
