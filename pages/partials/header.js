import React from 'react';
import Head from 'next/head';

/**
 *
 * @param props
 * @returns {*[]}
 * @constructor
 */
const Header = (props) => {
  const {
    cosmic: {
      post,
      global: {
        header: {
          metadata: { site_tag: siteTag, site_title: siteTitle },
        },
      },
    },
  } = props;

  return [
    <Head key={1}>
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Droid+Serif"
        rel="stylesheet"
      />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <title>
        {post ? `${props.cosmic.post.title} |` : 'Code For Web'}
        {' '}
      </title>
    </Head>,
    <header className="header" key={2}>
      <h1 className="site-title">
        <a href="/">{siteTitle}</a>
        <small className="site-title__tag">{siteTag}</small>
      </h1>
    </header>,
  ];
};

export default Header;
