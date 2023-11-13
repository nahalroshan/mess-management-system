import { Pool } from 'pg'
 
const pool = new Pool(
    {
        user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'psql12345',
  port: 5432,
    }
)
 
export const query = (text, params, callback) => {
  return pool.query(text, params, callback)
}