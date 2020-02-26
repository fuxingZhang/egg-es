'use strict';

const assert = require('assert');
const { Client } = require('@elastic/elasticsearch');

module.exports = app => {
  app.addSingleton('es', createOneClient);
};

function createOneClient(config, app) {
  const { node } = config;

  assert(node, `[egg-es] 'node: ${node}' is required on config`);

  app.coreLogger.info('[egg-es] connecting %s', node);
  const es = new Client(config);

  app.beforeStart(async () => {
    await es.ping();
    app.coreLogger.info('[egg-es] init instance success');
  });

  return es;
}
