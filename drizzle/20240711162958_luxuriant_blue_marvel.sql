CREATE TABLE IF NOT EXISTS "feedbacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" varchar,
	"user_name" text,
	"user_email" text,
	"message" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"url" text,
	"user_id" varchar
);
