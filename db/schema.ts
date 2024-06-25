import { date, pgTable, serial } from "drizzle-orm/pg-core";

export const visit_count = pgTable("visit_count", {
	id: serial("id").primaryKey(),
	date: date("date").notNull()
});
