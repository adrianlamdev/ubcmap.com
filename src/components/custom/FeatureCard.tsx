import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import { Skeleton } from "../ui/skeleton";

const FeatureCard = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={`bg-muted text-card-foreground p-6 relative ${className}`}
		{...props}
	/>
));
FeatureCard.displayName = "FeatureCard";

const FeatureCardTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<div className="space-y-4">
		<Skeleton className="absolute inset-x-0 top-0 h-48 rounded-t-lg" />
		<h2
			ref={ref}
			className={`pt-44 text-sm leading-none text-muted-foreground ${className}`}
			{...props}
		/>
	</div>
));
FeatureCardTitle.displayName = "FeatureCardTitle";

const FeatureCardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={`text-lg mt-4 ${className}`} {...props} />
));
FeatureCardDescription.displayName = "FeatureCardDescription";

const FeatureCardLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<typeof Link>
>(({ className, children, ...props }, ref) => (
	<Link ref={ref} {...props} className="mt-6 group flex items-center">
		<Button variant="ghostLink" className={`p-0 group ${className}`}>
			{children}
		</Button>
		<ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-2 text-primary" />
	</Link>
));
FeatureCardLink.displayName = "FeatureCardLink";

export {
	FeatureCard,
	FeatureCardTitle,
	FeatureCardDescription,
	FeatureCardLink,
};
