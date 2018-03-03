/*if (process.env.APP_MODE === undefined) {
 throw Error('APP_MODE not set in application environment');
}

const pg = require('pg');
const connectionString =  DATABASE_URL ||  "postgres://localhost:5432/tarot";



module.exports = {
  development: {
    client: 'pg',
    connection: connection: 'postgres://localhost:5432/tarot'
  }
  /*
  production: {
    client: 'pg',
    connection: process.env.connectionString
  }
};
*/

module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost:5432/tarot'
    }
  }
