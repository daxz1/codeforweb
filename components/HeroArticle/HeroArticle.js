import React, { memo } from 'react';
import {format} from "date-fns";

const HeroArticle = ({ article }) => {
  const {
    title,
    urlToImage,
    author,
    source,
    publishedAt,
    description
  } = article;
  return (
    <div className='article' style={{marginBottom: '1.5rem'}}>
      <h1 className='title is-4'>{title}</h1>
      <div>
        <img src={urlToImage} className='article__image'/>
        <p
          className='subtitle is-7 article--credits'>By <strong>{author}</strong> from {source.name} on {format(new Date(publishedAt), 'EEEE Do MMMM yyyy pppp')}
        </p>
      </div>
      <h2 className='subtitle is-6'>{description}</h2>
    </div>
  )
};

export default memo(HeroArticle);
