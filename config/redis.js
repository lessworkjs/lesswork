module.exports = {
  connection: 'redis',

  redis: {
    port: 6379, // Redis port
    host: '127.0.0.1', // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: 'auth',
    db: 0,
  },

  redisAlternate: {
    port: 6380, // Redis port
    host: '127.0.0.1', // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: 'auth',
    db: 0,
  },

};