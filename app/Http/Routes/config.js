const yaml = require('js-yaml');
const fs = require('fs');

module.exports = () => {
  const path = `${__dirname}/`;
  let results = '';

  fs.readdirSync(path).forEach(function (element) {
    if (element.match('.js')) {
      if (element == 'config.js') {
        return;
      }

      mod = require(path + element);

      results += mod.config + '\n';
    }
  }, this);

  return yaml.safeLoad(results, 'utf8');
};