/* eslint-disable no-multi-assign */
// https://www.npmjs.com/package/next-routes
const routes = (module.exports = require('next-routes')());

routes.add('index', '/article/:slug', 'post').add('flexbox', '/flexbox');
