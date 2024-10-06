DO $$ BEGIN
 CREATE TYPE "public"."degreeType" AS ENUM('major');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."requirementType" AS ENUM('prerequisite', 'corequisite');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."scienceCategory" AS ENUM('math', 'chemistry', 'physics', 'life_science', 'statistics', 'computer_science', 'earth_planetary_science');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "BScRequirement" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"min_science_credits" integer NOT NULL,
	"min_arts_credits" integer NOT NULL,
	"required_communication_credits" integer NOT NULL,
	"required_science_categories" integer NOT NULL,
	"min_total_credits" integer NOT NULL,
	"required_upper_level_credits" integer NOT NULL,
	"max_non_science_arts_credits" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Course" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"subject_code" text NOT NULL,
	"number" integer NOT NULL,
	"title" text NOT NULL,
	"credits" integer NOT NULL,
	"description" text,
	"is_upper_level" boolean DEFAULT false NOT NULL,
	"year_level" integer,
	"is_laboratory" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "CourseCategory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"is_science" boolean DEFAULT false NOT NULL,
	"is_arts" boolean DEFAULT false NOT NULL,
	"is_communication" boolean DEFAULT false NOT NULL,
	"science_category" "scienceCategory"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "CourseRequirement" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"course_id" uuid NOT NULL,
	"required_course_id" uuid NOT NULL,
	"type" "requirementType" NOT NULL,
	"requirement_text" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Degree" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"type" "degreeType" NOT NULL,
	"bsc_requirement_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "PromotionRequirement" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"bsc_requirement_id" uuid NOT NULL,
	"year_level" integer NOT NULL,
	"min_credits_required" integer NOT NULL,
	"min_science_credits_required" integer NOT NULL,
	"min_science_credits_100_level" integer NOT NULL,
	"min_science_credits_200_level" integer NOT NULL,
	"min_science_credits_any_level" integer NOT NULL,
	"min_lab_science_credits" integer NOT NULL,
	"min_communication_credits" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ScienceBreadthRequirement" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"bsc_requirement_id" uuid NOT NULL,
	"category" "scienceCategory" NOT NULL,
	"required_credits" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Specialization" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"degree_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "SpecializationCourse" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"specialization_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"is_required" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Subject" (
	"code" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Course" ADD CONSTRAINT "Course_subject_code_Subject_code_fk" FOREIGN KEY ("subject_code") REFERENCES "public"."Subject"("code") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "CourseRequirement" ADD CONSTRAINT "CourseRequirement_course_id_Course_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."Course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "CourseRequirement" ADD CONSTRAINT "CourseRequirement_required_course_id_Course_id_fk" FOREIGN KEY ("required_course_id") REFERENCES "public"."Course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Degree" ADD CONSTRAINT "Degree_bsc_requirement_id_BScRequirement_id_fk" FOREIGN KEY ("bsc_requirement_id") REFERENCES "public"."BScRequirement"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "PromotionRequirement" ADD CONSTRAINT "PromotionRequirement_bsc_requirement_id_BScRequirement_id_fk" FOREIGN KEY ("bsc_requirement_id") REFERENCES "public"."BScRequirement"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ScienceBreadthRequirement" ADD CONSTRAINT "ScienceBreadthRequirement_bsc_requirement_id_BScRequirement_id_fk" FOREIGN KEY ("bsc_requirement_id") REFERENCES "public"."BScRequirement"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Specialization" ADD CONSTRAINT "Specialization_degree_id_Degree_id_fk" FOREIGN KEY ("degree_id") REFERENCES "public"."Degree"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "SpecializationCourse" ADD CONSTRAINT "SpecializationCourse_specialization_id_Specialization_id_fk" FOREIGN KEY ("specialization_id") REFERENCES "public"."Specialization"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "SpecializationCourse" ADD CONSTRAINT "SpecializationCourse_course_id_Course_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."Course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
