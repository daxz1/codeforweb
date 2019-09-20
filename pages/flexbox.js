import React, { memo } from 'react';
import '../styles/flexbox/flexbox.scss';

const Flexbox = () => (
  <>
    <div className="flexbox">

      <div className="menu-container">
        <div className="menu">
          <div className="logo" />
        </div>
      </div>

      <div className="photo-grid-container">
        <div className="photo-grid">
          <div className="photo-grid-item first-item">
            <article className="article article-one">
              <div className="title">Davinder</div>
            </article>
          </div>
          <article className="article article-two">
            <div className="title">Ben & Rav</div>
          </article>
          <article className="article article-three">
            <div className="title">Rajveer</div>
          </article>
          <article className="article article-four">
            <div className="title">Home</div>
          </article>
          <article className="article article-five">
            <div className="title">Flat</div>
          </article>
        </div>
      </div>
    </div>
  </>
);

export default memo(Flexbox);
