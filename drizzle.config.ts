import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
	schema: "./db/schema.ts",
	out: "./drizzle",
	dialect: "postgresql",
	dbCredentials: {
		host: process.env.SECRET_DATABASE_HOST!,
		user: process.env.SECRET_DATABASE_USER!,
		password: process.env.SECRET_DATABASE_PASSWORD!,
		database: process.env.SECRET_DATABASE_NAME!
	}
});
