import type { PageServerLoad } from "./$types";
import { db } from "$lib/db/drizzle";
import { visit_count } from "$lib/db/schema";
import { sql } from "drizzle-orm";

export const load: PageServerLoad = async () => {
	await db
		.insert(visit_count)
		.values({
			date: new Date().toISOString().split("T")[0],
			count: 1
		})
		.onConflictDoUpdate({
			target: visit_count.date,
			set: {
				count: sql`${visit_count.count} + 1`
			}
		});

	return;
};
