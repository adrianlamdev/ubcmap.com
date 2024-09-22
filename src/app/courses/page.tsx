import PageContainer from "@/components/custom/page-container";
import { Input } from "@/components/ui/input";
import {
  ArrowRightIcon,
  CaretSortIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CourseCard,
  CourseCardCode,
  CourseCardTitle,
  CourseCardLink,
  CourseCardRating,
} from "@/components/custom/course-card";

export default function CoursesPage() {
  return (
    <PageContainer className="lg:py-8 py-12 md:py-16">
      <div aria-label="Course Directory Information">
        <h1 className="lg:text-2xl text-3xl md:text-4xl font-bold">
          Course Directory
        </h1>
        <p className="mt-2 md:text-base text-lg text-muted-foreground max-w-prose">
          Find courses, view grade distributions, explore prerequisites, and
          student reviews.
        </p>
      </div>
      <Input
        className="mt-8"
        placeholder="Search for courses"
        startIcon={MagnifyingGlassIcon}
      />
      <div className="mt-8">
        <Button size="sm" variant="ghost" className="gap-1">
          <CaretSortIcon />
          Sort
        </Button>
      </div>
      <div className="flex flex-col gap-6 mt-2">
        <CourseCard>
          <CourseCardCode>CPSC 110</CourseCardCode>
          <CourseCardTitle>
            Computation, Programs, and Programming
          </CourseCardTitle>
          <div className="flex items-center justify-between">
            <div>
              <CourseCardLink href="/rate-course" variant="primary">
                Rate this course
              </CourseCardLink>
              <CourseCardLink href="/course-details" variant="secondary">
                View course details
              </CourseCardLink>
            </div>
            <CourseCardRating rating={4.5} />
          </div>
        </CourseCard>
        <CourseCard>
          <CourseCardCode>CPSC 110</CourseCardCode>
          <CourseCardTitle>
            Computation, Programs, and Programming
          </CourseCardTitle>
          <CourseCardLink href="/course-details" variant="primary">
            View course details
          </CourseCardLink>
          <CourseCardLink href="/rate-course" variant="secondary">
            Rate this course
          </CourseCardLink>
        </CourseCard>
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
      </div>
    </PageContainer>
  );
}
