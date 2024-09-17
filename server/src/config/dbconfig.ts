import pg from "pg";
import { areEnvVariablesDefined } from "../helpers";

async function dbConnectionConfig() {
  try {
    const { Client } = pg;

    const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = process.env;

    
    const areEnvVariablesValid = areEnvVariablesDefined(DB_HOST, DB_NAME, DB_PASSWORD, DB_USER)

    if (!areEnvVariablesValid) {
        throw new Error('One or more environment variables are missing or invalid');
      }

    const client = new Client({
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: 5334,
        database: DB_NAME,
      })

    await client.connect();
  } catch (error) {
    console.error(`Database connection failed: ${error}`);
  }
}

export default dbConnectionConfig;
