import { date, integer, pgTable, serial } from "drizzle-orm/pg-core";

export const visit_count = pgTable("visit_count", {
	id: serial("id").primaryKey(),
	date: date("date").notNull().unique(),
	count: integer("count").notNull().default(1)
});
