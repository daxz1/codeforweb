/* eslint-disable no-multi-assign */

const routes = (module.exports = require('next-routes')());

routes.add('index', '/:slug', 'post');
