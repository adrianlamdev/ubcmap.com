import {
  FeatureCard,
  FeatureCardDescription,
  FeatureCardLink,
  FeatureCardTitle,
} from "@/components/custom/FeatureCard";
import PageContainer from "@/components/custom/PageContainer";

const features = [
  {
    title: "Degree Explorer",
    description: "Visualize course paths for various majors and careers",
    linkHref: "/paths",
    linkText: "Discover Paths",
  },
  {
    title: "Course Analytics",
    description: "Access grade distributions and prerequisite information",
    linkHref: "/courses",
    linkText: "Explore Courses",
  },
];

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
        {features.map((feature) => (
          <FeatureCard>
            <FeatureCardTitle>{feature.title}</FeatureCardTitle>
            <FeatureCardDescription>
              {feature.description}
            </FeatureCardDescription>
            <FeatureCardLink href={feature.linkHref}>
              {feature.linkText}
            </FeatureCardLink>
          </FeatureCard>
        ))}
      </div>
    </PageContainer>
  );
}
