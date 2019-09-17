import React from 'react';

const footer = () => (
  <footer className="footer">
    <div>
      <a
        href="https://cosmicjs.com"
        target="_blank"
        rel="noreferrer noopener"
        style={{ textDecoration: 'none' }}
      >
        <img
          style={{ float: 'left', marginRight: 15, position: 'relative' }}
          src="https://cosmicjs.com/images/logo.svg"
          width="28"
          height="28"
          alt="Cosmic JS"
        />
        <span
          className="powered-by"
          style={{ position: 'relative', top: 4, color: '#333' }}
        >
          Proudly powered by Cosmic JS
        </span>
      </a>
    </div>
  </footer>
);

export default footer;
