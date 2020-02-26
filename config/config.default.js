'use strict';

/**
 * egg-es default config
 * @member Config#@eggplugin/es
 * @property {String} SOME_KEY - some description
 */
exports.es = {
  // default configuration for all clients
  default: {
    node: 'http://localhost:9200',
  },
  app: true,
  agent: false,

  // Single client
  // client: {
  //   node: 'http://xxx:9200',
  //   // ...
  // },

  // Multi client
  // clients: {
  //   client1: {
  //     node: 'http://xxx:9200',
  //     // ...
  //   },
  //   client2: {
  //     node: 'http://xxx:9200',
  //     // ...
  //   },
  // },
};
