import { cwd } from "node:process";
import type { Config } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(cwd());

export default {
  schema: ".src/db/schema.tx",
  out: "./src/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
    // host: process.env.DATABASE_HOST,
    // user: process.env.DATABASE_USERNAME,
    // password: process.env.DATABASE_PASSWORD,
    // database: process.env.DATABASE_NAME,
  },
  breakpoints: true,
} satisfies Config;
