module.exports = function () {
  return require('lesswork-framework/lib/functions')([
    `${__dirname}/../app/Http/Routes/`,
    `${__dirname}/../app/Http/Authentication/`,
    `${__dirname}/../app/Http/Functions/`,
  ]);
};