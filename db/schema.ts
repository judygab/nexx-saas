import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("user_id"),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  feedbacks: many(feedbacks),
}));

export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id"),
  userName: text("user_name"),
  userEmail: text("user_email"),
  message: text("message"),
});

export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields: [feedbacks.projectId],
    references: [projects.id],
  }),
}));
