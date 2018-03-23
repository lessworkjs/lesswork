module.exports = () => {
  return require('lesswork-framework/lib/functions')([
    `${__dirname}/app/Http/Routes/`,
    `${__dirname}/app/Http/Authentication/`,
  ]);
};