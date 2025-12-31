// import "server-only";  // <- tells TS + Next this is Node-only
// import { Pool } from "pg";

// const pool =  new Pool({
//     connectionString:process.env.DATABASE_URL,
// });

// export default pool;

import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});


export default pool;
