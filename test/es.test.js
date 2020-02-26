'use strict';

const mock = require('egg-mock');

describe('test/es.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/es-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, es')
      .expect(200);
  });
});
