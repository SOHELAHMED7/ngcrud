exports.config = {
  tests: 'codecept/*_test.js',
  output: './codecept/output',
  helpers: {
    Protractor: {
      url: 'http://localhost:4202/fruits',
      driver: 'local',
      browser: 'chrome',
      rootElement: 'body',
      angular: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    wdio: {
      services: ['selenium-standalone']
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'fruitcrud'
}
