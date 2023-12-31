// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'gestion_presence',
      user:     'root',
      password: 't'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  //production: {
  //  client: 'mysql',
  //  connection: {
  //    database: 'my_db',
  //    user:     'username',
  //    password: 'password'
  //  },
  //  pool: {
  //    min: 2,
  //    max: 10
  //  },
  //  migrations: {
  //    tableName: 'knex_migrations'
  //  }
  //}

};
