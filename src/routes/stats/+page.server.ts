import type { PageServerLoad } from "./$types";
import { db } from "$lib/db/drizzle";
import { visit_count } from "$lib/db/schema";

export const load: PageServerLoad = async () => {
	const data = await db.select().from(visit_count);
	return {
		visitData: data
	};
};
