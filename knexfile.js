// Update with your config settings.

module.exports = {
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './__tests__/test.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/games.sqlite3'
    },
    useNullAsDefault: true
  },

  
};
