import { relations, sql } from "drizzle-orm";
import {
  pgTable,
  text,
  integer,
  uuid,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";

// Enums
export const scienceCategoryEnum = pgEnum("scienceCategory", [
  "math",
  "chemistry",
  "physics",
  "life_science",
  "statistics",
  "computer_science",
  "earth_planetary_science",
]);

export const requirementTypeEnum = pgEnum("requirementType", [
  "prerequisite",
  "corequisite",
]);

export const degreeTypeEnum = pgEnum("degreeType", ["major"]);

// Tables
export const subject = pgTable("Subject", {
  code: text("code").primaryKey(),
  name: text("name").notNull(),
});

export const course = pgTable("Course", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  subjectCode: text("subject_code")
    .notNull()
    .references(() => subject.code),
  number: integer("number").notNull(),
  title: text("title").notNull(),
  credits: integer("credits").notNull(),
  description: text("description"),
  isUpperLevel: boolean("is_upper_level").notNull().default(false),
  yearLevel: integer("year_level"),
  isLaboratory: boolean("is_laboratory").notNull().default(false),
});

export const courseCategory = pgTable("CourseCategory", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  isScience: boolean("is_science").notNull().default(false),
  isArts: boolean("is_arts").notNull().default(false),
  isCommunication: boolean("is_communication").notNull().default(false),
  scienceCategory: scienceCategoryEnum("science_category"),
});

export const courseRequirement = pgTable("CourseRequirement", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  courseId: uuid("course_id")
    .notNull()
    .references(() => course.id),
  requiredCourseId: uuid("required_course_id")
    .notNull()
    .references(() => course.id),
  type: requirementTypeEnum("type").notNull(),
  requirementText: text("requirement_text"),
});

export const bscRequirement = pgTable("BScRequirement", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  minScienceCredits: integer("min_science_credits").notNull(),
  minArtsCredits: integer("min_arts_credits").notNull(),
  requiredCommunicationCredits: integer(
    "required_communication_credits",
  ).notNull(),
  requiredScienceCategories: integer("required_science_categories").notNull(),
  minTotalCredits: integer("min_total_credits").notNull(),
  requiredUpperLevelCredits: integer("required_upper_level_credits").notNull(),
  maxNonScienceArtsCredits: integer("max_non_science_arts_credits").notNull(),
});

export const scienceBreadthRequirement = pgTable("ScienceBreadthRequirement", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  bscRequirementId: uuid("bsc_requirement_id")
    .notNull()
    .references(() => bscRequirement.id),
  category: scienceCategoryEnum("category").notNull(),
  requiredCredits: integer("required_credits").notNull(),
});

export const degree = pgTable("Degree", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: degreeTypeEnum("type").notNull(),
  bscRequirementId: uuid("bsc_requirement_id")
    .notNull()
    .references(() => bscRequirement.id),
});

export const specialization = pgTable("Specialization", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  degreeId: uuid("degree_id")
    .notNull()
    .references(() => degree.id),
});

export const specializationCourse = pgTable("SpecializationCourse", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  specializationId: uuid("specialization_id")
    .notNull()
    .references(() => specialization.id),
  courseId: uuid("course_id")
    .notNull()
    .references(() => course.id),
  isRequired: boolean("is_required").notNull().default(false),
});

export const promotionRequirement = pgTable("PromotionRequirement", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  bscRequirementId: uuid("bsc_requirement_id")
    .notNull()
    .references(() => bscRequirement.id),
  yearLevel: integer("year_level").notNull(),
  minCreditsRequired: integer("min_credits_required").notNull(),
  minScienceCreditsRequired: integer("min_science_credits_required").notNull(),
  minScienceCredits100Level: integer("min_science_credits_100_level").notNull(),
  minScienceCredits200Level: integer("min_science_credits_200_level").notNull(),
  minScienceCreditsAnyLevel: integer("min_science_credits_any_level").notNull(),
  minLabScienceCredits: integer("min_lab_science_credits").notNull(),
  minCommunicationCredits: integer("min_communication_credits").notNull(),
});

// Relations
export const subjectRelations = relations(subject, ({ many }) => ({
  courses: many(course),
}));

export const courseRelations = relations(course, ({ one, many }) => ({
  subject: one(subject, {
    fields: [course.subjectCode],
    references: [subject.code],
  }),
  categories: many(courseCategory),
  requirements: many(courseRequirement, { relationName: "courseRequirements" }),
  requiredFor: many(courseRequirement, { relationName: "requiredForCourses" }),
  specializations: many(specializationCourse),
}));

export const courseCategoryRelations = relations(
  courseCategory,
  ({ many }) => ({
    courses: many(course),
  }),
);

export const courseRequirementRelations = relations(
  courseRequirement,
  ({ one }) => ({
    course: one(course, {
      fields: [courseRequirement.courseId],
      references: [course.id],
      relationName: "courseRequirements",
    }),
    requiredCourse: one(course, {
      fields: [courseRequirement.requiredCourseId],
      references: [course.id],
      relationName: "requiredForCourses",
    }),
  }),
);

export const bscRequirementRelations = relations(
  bscRequirement,
  ({ many, one }) => ({
    scienceBreadthRequirements: many(scienceBreadthRequirement),
    promotionRequirements: many(promotionRequirement),
    degree: one(degree),
  }),
);

export const scienceBreadthRequirementRelations = relations(
  scienceBreadthRequirement,
  ({ one }) => ({
    bscRequirement: one(bscRequirement, {
      fields: [scienceBreadthRequirement.bscRequirementId],
      references: [bscRequirement.id],
    }),
  }),
);

export const degreeRelations = relations(degree, ({ one, many }) => ({
  bscRequirement: one(bscRequirement, {
    fields: [degree.bscRequirementId],
    references: [bscRequirement.id],
  }),
  specializations: many(specialization),
}));

export const specializationRelations = relations(
  specialization,
  ({ one, many }) => ({
    degree: one(degree, {
      fields: [specialization.degreeId],
      references: [degree.id],
    }),
    courses: many(specializationCourse),
  }),
);

export const specializationCourseRelations = relations(
  specializationCourse,
  ({ one }) => ({
    specialization: one(specialization, {
      fields: [specializationCourse.specializationId],
      references: [specialization.id],
    }),
    course: one(course, {
      fields: [specializationCourse.courseId],
      references: [course.id],
    }),
  }),
);

export const promotionRequirementRelations = relations(
  promotionRequirement,
  ({ one }) => ({
    bscRequirement: one(bscRequirement, {
      fields: [promotionRequirement.bscRequirementId],
      references: [bscRequirement.id],
    }),
  }),
);
