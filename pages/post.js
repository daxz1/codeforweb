/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import consola from 'consola';
import axios from 'axios';
import _ from 'lodash';
import config from '../config';
import { Header, Layout } from '../components';

// import '../styles/global/styles.scss';

const Post = (props) => {
  const {
    cosmic: { post },
  } = props;

  if (!post) {
    return <div>Post Not Found</div>;
  }

  const { title, created, content } = post;

  return (
    <Layout cosmic={props}>
      <Header />
      <main className="post">
        {post && (
          <>
            <h2 className="post__title">{title}</h2>
            <div>{created}</div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </>
        )}
      </main>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }) => {
  const globalsQuery = `{
      getObjects(bucket_slug: "${config.bucket.slug}", input: {
        read_key: "${config.bucket.read_key}"
      }) {
        type_slug
        slug
        title
        content
        metadata
        created_at
      }
    }`;

  const globals = await axios
    .post('https://graphql.cosmicjs.com/v1', { query: globalsQuery })
    .then((response) => _.keyBy(
      _.filter(response.data.data.getObjects, { type_slug: 'globals' }),
      'slug',
    ))
    .catch((error) => {
      consola.log(error);
    });

  const post_query = `{
      getObject(bucket_slug: "${config.bucket.slug}", input: {
        read_key: "${config.bucket.read_key}",
        slug: "${query.slug}",
        revision: "${query.revision}"
      }) {
        type_slug
        slug
        title
        content
        metadata
        created_at
      }
    }`;
  const post = await axios
    .post('https://graphql.cosmicjs.com/v1', { query: post_query })
    .then((response) => response.data.data.getObject)
    .catch((error) => {
      consola.log(error);
    });
  return Promise.all([globals, post]).then((values) => ({
    cosmic: {
      global: values[0],
      post: values[1],
    },
  }));
};

export default Post;
