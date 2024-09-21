import PageContainer from "@/components/custom/PageContainer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageContainer className="py-12">
      <h1 className="text-3xl font-bold leading-7">
        Visualize Your UBC Journey
      </h1>
      <p className="mt-4">
        Explore degree paths, course insights, and student experiences.
      </p>
      {/* Main Features Grid: a. Academic Pathfinder: Icon of a compass or map */}
      {/* Title: "Degree Explorer" Description: "Visualize course paths for various */}
      {/* majors and careers" "Discover Paths" button b. Course Insights: Icon of a */}
      {/* lightbulb or graph Title: "Course Analytics" Description: "Access grade */}
      {/* distributions and prerequisite information" "Explore Courses" button */}
      {/* Trending Section: "Hot Topics" showcasing popular courses or discussions */}
      {/* "Campus Pulse" with interesting stats or facts about university life */}
      {/* Utility Tools: GPA Calculator Study Schedule Optimizer Prerequisite */}
      {/* Checker Footer: Disclaimer: "CampusCompass is not affiliated with or */}
      {/* endorsed by UBC" About Us Contact/Feedback Terms of Use & Privacy Policy */}
      <div className="flex flex-col gap-8">
        <div className="bg-muted p-5">
          <h2 className="text-sm text-muted-foreground">Degree Explorer</h2>
          <p className="text-lg mt-2">
            Visualize course paths for various majors and careers
          </p>
          <Button asChild className="gap-3 mt-4 px-0" variant="link">
            <Link href="/paths">
              Discover Paths <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <div className="bg-muted p-5">
          <h2 className="text-sm text-muted-foreground">Course Analytics</h2>
          <p className="text-lg mt-2">
            Access grade distributions and prerequisite information
          </p>
          <Button asChild className="gap-3 mt-4 px-0" variant="link">
            <Link href="/paths">
              Explore Courses <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
