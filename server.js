// server.js
const next = require('next');
// With express
const express = require('express');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(process.env.PORT || 3000);
});
