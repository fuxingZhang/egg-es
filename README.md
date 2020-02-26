# egg-es

[Elasticsearch](https://github.com/elastic/elasticsearch-js) plugin for Egg.js

> NOTE: This plugin just for integrate Elasticsearch into Egg.js, more documentation please visit https://ela.st/js-client.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@eggplugin/es.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@eggplugin/es
[travis-image]: https://img.shields.io/travis/eggjs/@eggplugin/es.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/@eggplugin/es
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/@eggplugin/es.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/@eggplugin/es?branch=master
[david-image]: https://img.shields.io/david/eggjs/@eggplugin/es.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/@eggplugin/es
[snyk-image]: https://snyk.io/test/npm/@eggplugin/es/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@eggplugin/es
[download-image]: https://img.shields.io/npm/dm/@eggplugin/es.svg?style=flat-square
[download-url]: https://npmjs.org/package/@eggplugin/es

Elasticsearch plugin for Egg.js

## Install

```bash
$ npm i @eggplugin/es --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.es = {
  enable: true,
  package: '@eggplugin/es',
};
```
see [config/config.default.js](config/config.default.js) for more detail.

## Configuration

```js
// {app_root}/config/config.default.js
exports.@eggplugin/es = {
};
```
see [config/config.default.js](config/config.default.js) for more detail.

### Simple instance

```js
// {app_root}/config/config.default.js
exports.es = {
  client: {
    node: 'http://localhost:9200',
    // ...
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
(async () => {
  // you can access to simple aws es instance using app.es.
  const es = app.es;
  const data = await es.ping();
  console.log(data);
  const result = await client.search({
    index: 'my-index',
    body: { foo: 'bar' }
  });
  console.log(result);
}).catch(console.error);
```

### Multiple instance

```js
exports.es = {
  // default configuration for all clients
  default: {
    // maxRetries: 5,
    // requestTimeout: 60000,
    // sniffOnStart: true
    // ...
  },
  clients: {
    // clientId, access the client instance by app.es.get('clientId')
    client1: {
      node: 'http://localhost:9200',
      // ...
    },
    client2: {
      node: 'http://localhost:9200',
      // ...
    },
    // ...
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
(async () => {
  const client1 = app.es.get('client1'); 
  const client2 = app.es.get('client2'); 
  const data1 = await client1.ping();
  const data2 = await client2.ping();
}).catch(console.error);
```

## Questions & Suggestions

Please open an issue [here](https://github.com/fuxingZhang/egg-es/issues).

## License

[MIT](LICENSE)