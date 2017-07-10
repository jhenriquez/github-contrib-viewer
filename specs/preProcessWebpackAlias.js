const bJest = require('babel-jest');
const wpAlias = require('jest-webpack-alias');

module.exports = {
  process: function(src, filename) {
    if (filename.indexOf('node_modules') === -1) {
      src = bJest.process(src, filename);
      src = wpAlias.process(src, filename);
    }
    return src;
  }
};