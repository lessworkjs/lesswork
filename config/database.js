'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: env('DB_CONNECTION', 'mysql'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be good choice under development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath('development.sqlite')
    },
    useNullAsDefault: true,
    debug: env('DB_DEBUG', false)
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: env('DB_HOST', '192.168.10.10'),
      port: env('DB_PORT', '3306'),
      user: env('DB_USER', 'homestead'),
      password: env('DB_PASSWORD', 'secret'),
      database: env('DB_DATABASE', 'test')
    },
    pool: {
      min: 2,
      max: 10,
      evictionRunIntervalMillis: 30000,
      numTestsPerEvictionRun: 10,
    },
    acquireConnectionTimeout: 10000,
    debug: env('DB_DEBUG', false)
  },

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      host: env('DB_HOST', 'localhost'),
      port: env('DB_PORT', ''),
      user: env('DB_USER', 'root'),
      password: env('DB_PASSWORD', ''),
      database: env('DB_DATABASE', 'adonis')
    },
    debug: env('DB_DEBUG', false)
  }
}