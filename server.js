// server.js
const next = require('next');
// With express
const express = require('express');
const consola = require('consola');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const ISDEV = process.env.NODE_DEV !== 'production';
const ENV = process.env.NODE_DEV;

const app = next({ dev: ISDEV });
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    express()
      .use(handler)
      .listen(PORT, (err) => {
        if (err) {
          consola.error(err);
          throw err;
        }
        consola.success(`Server listening on port ${PORT} in ${ENV} mode`);
      });
  })
  .catch((e) => {
    consola.error(`Error Starting app ${e}`);
  });
