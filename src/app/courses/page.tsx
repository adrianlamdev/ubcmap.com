import {
  CourseCard,
  CourseCardCode,
  CourseCardFooter,
  CourseCardLink,
  CourseCardRating,
  CourseCardTitle,
} from "@/components/custom/course-card";
import PageContainer from "@/components/custom/page-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowRightIcon,
  CaretSortIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

const courses = [
  {
    code: "CPSC 110",
    title: "Computation, Programs, and Programming",
    rating: 4.5,
    links: [
      {
        href: "/rate-course",
        variant: "primary",
        text: "Rate this course",
      },
      {
        href: "/course-details",
        variant: "secondary",
        text: "View course details",
      },
    ],
  },
  {
    code: "CPSC 121",
    title: "Models of Computation",
    rating: 4.2,
    links: [
      {
        href: "/rate-course",
        variant: "primary",
        text: "Rate this course",
      },
      {
        href: "/course-details",
        variant: "secondary",
        text: "View course details",
      },
    ],
  },
  {
    code: "CPSC 210",
    title: "Software Construction",
    rating: 4.7,
    links: [
      {
        href: "/rate-course",
        variant: "primary",
        text: "Rate this course",
      },
      {
        href: "/course-details",
        variant: "secondary",
        text: "View course details",
      },
    ],
  },
  {
    code: "CPSC 213",
    title: "Introduction to Computer Systems",
    rating: 4.3,
    links: [
      {
        href: "/rate-course",
        variant: "primary",
        text: "Rate this course",
      },
      {
        href: "/course-details",
        variant: "secondary",
        text: "View course details",
      },
    ],
  },
];

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
        {courses.map((course) => (
          <CourseCard key={course.code}>
            <CourseCardCode>{course.code}</CourseCardCode>
            <CourseCardTitle>{course.title}</CourseCardTitle>
            <CourseCardFooter rating={course.rating} links={course.links} />
          </CourseCard>
        ))}
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
      </div>
    </PageContainer>
  );
}
