import {
  FeatureCard,
  FeatureCardDescription,
  FeatureCardLink,
  FeatureCardTitle,
} from "@/components/custom/feature-card";
import PageContainer from "@/components/custom/page-container";
import { Button } from "@/components/ui/button";
import { BarChartIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
const features = [
  {
    title: "Degree Navigator",
    description: "See your progress and plan ahead",
    linkHref: "/degree-navigator",
    linkText: "View Progress",
  },
  {
    title: "Path Explorer",
    description: "Visualize course paths for various majors and careers",
    linkHref: "/paths",
    linkText: "Discover Paths",

    icon: <MagnifyingGlassIcon />,
  },
  {
    title: "Course Analytics",
    description: "Access grade distributions and prerequisite information",
    linkHref: "/courses",
    linkText: "Explore Courses",
    icon: <BarChartIcon />,
  },
];

export default function Home() {
  return (
    <PageContainer className="pt-16">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-center text-foreground">
          Navigate Your UBC Academic Journey
        </h1>
        <p className="mt-6 text-base text-center text-muted-foreground">
          Your all-in-one platform for degree planning, course exploration, and
          academic insights.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Button className="w-full gap-2" size="lg">
            Start Exploring
          </Button>
          <Button className="w-full gap-2" size="lg" variant="outline">
            Get a Quick Demo
          </Button>
        </div>
      </div>
      {/* Trending Section: "Hot Topics" showcasing popular courses or discussions */}
      {/* "Campus Pulse" with interesting stats or facts about university life */}
      {/* Utility Tools: GPA Calculator Study Schedule Optimizer Prerequisite */}
      {/* Checker Footer: Disclaimer: "CampusCompass is not affiliated with or */}
      {/* endorsed by UBC" About Us Contact/Feedback Terms of Use & Privacy Policy */}
      <div className="flex flex-col mt-12">
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureCardTitle className="flex items-center gap-2">
              {feature.icon}
              {feature.title}
            </FeatureCardTitle>
            <FeatureCardDescription>
              {feature.description}
            </FeatureCardDescription>
            <FeatureCardLink href={feature.linkHref}>
              {feature.linkText}
            </FeatureCardLink>
          </FeatureCard>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="mt-2 text-2xl">Your Tools for Success</h2>
        <p className="mt-2">
          From degree planning to WorkDay calendar conversions.
        </p>
      </div>
    </PageContainer>
  );
}
