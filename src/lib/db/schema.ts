import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";

export const subjects = pgTable("Subjects", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const subjectsRelations = relations(subjects, ({ many }) => ({
  courses: many(courses),
}));

export const courses = pgTable("Courses", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  subjectId: text("subject_id"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  credits: integer("credits").notNull(),
});

export const coursesRelations = relations(courses, ({ one }) => ({
  subject: one(subjects, {
    fields: [courses.subjectId],
    references: [subjects.id],
  }),
}));
