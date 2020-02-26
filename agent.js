'use strict';

const es = require('./lib/es');

module.exports = agent => {
  if (agent.config.es.agent) es(agent);
};
