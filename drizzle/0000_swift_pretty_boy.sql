CREATE TABLE IF NOT EXISTS "visit_count" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"count" integer DEFAULT 1 NOT NULL
);
