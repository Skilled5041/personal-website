import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { SECRET_DATABASE_URL } from "$env/static/private";

const connection = neon(SECRET_DATABASE_URL);
export const dbgit = drizzle(connection);