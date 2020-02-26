'use strict';

const es = require('./lib/es');

module.exports = app => {
  if (app.config.es.app) es(app);
};
