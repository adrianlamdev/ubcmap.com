import {
	FeatureCard,
	FeatureCardDescription,
	FeatureCardLink,
	FeatureCardTitle,
} from "@/components/custom/FeatureCard";
import PageContainer from "@/components/custom/PageContainer";
import { FancyBox } from "@/components/custom/fancy-box";

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
			<h1 className="text-3xl font-bold">Visualize Your UBC Journey</h1>
			<p className="mt-4 text-lg">
				Explore degree paths, course insights, and student experiences.
			</p>
			{/* Trending Section: "Hot Topics" showcasing popular courses or discussions */}
			{/* "Campus Pulse" with interesting stats or facts about university life */}
			{/* Utility Tools: GPA Calculator Study Schedule Optimizer Prerequisite */}
			{/* Checker Footer: Disclaimer: "CampusCompass is not affiliated with or */}
			{/* endorsed by UBC" About Us Contact/Feedback Terms of Use & Privacy Policy */}
			<div className="flex flex-col gap-6">
				{features.map((feature, index) => (
					<FeatureCard key={index}>
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
