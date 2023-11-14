const { Pool } = require('pg');

const pool = new Pool({
  user: '8589mj',
  host: 'ep-frosty-cell-10898492.ap-southeast-1.aws.neon.tech',
  database: 'mess',
  password: 'SFZs9ErXph4v',
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Use this option cautiously, only for development purposes
  },
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Error with database connection:', err);
});

// Function to execute queries using the pool
const query = async (text, params) => {
  return pool.query(text, params);
};

// Export the query function for use in other files
module.exports = { query };
