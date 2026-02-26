import type { Knex } from "knex";
import fs from "fs";
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const certPath = process.env.DB_CA_CERT_PATH
  ? path.resolve(process.env.DB_CA_CERT_PATH)
  : null;

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",

    //@ts-ignore
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),

      ssl: certPath ? {
        ca: fs.readFileSync(certPath).toString(),
        rejectUnauthorized: true
      } : undefined
    },
    migrations: {
      directory: "./src/database/migrations",
      extension: "ts"
    },
  }
};

export default config;
