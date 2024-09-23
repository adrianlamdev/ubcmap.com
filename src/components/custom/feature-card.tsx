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
		className={`bg-card border border-border-ghost text-card-foreground p-6 relative ${className}`}
		{...props}
	/>
));
FeatureCard.displayName = "FeatureCard";

const FeatureCardTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<div className="space-y-4">
		<h2
			ref={ref}
			className={`text-sm leading-none text-muted-foreground ${className}`}
			{...props}
		/>
	</div>
));
FeatureCardTitle.displayName = "FeatureCardTitle";

const FeatureCardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={`text-lg mt-2 ${className}`} {...props} />
));
FeatureCardDescription.displayName = "FeatureCardDescription";

const FeatureCardLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<typeof Link>
>(({ className, children, ...props }, ref) => (
	<Link {...props} className="mt-6 group inline-block">
		<Button
			variant="outline"
			className={`rounded-3xl transition-all duration-200 ease-in-out group-hover:pr-6 ${className}`}
		>
			<span className="flex items-center">
				{children}
				<ArrowRightIcon className="w-4 h-4 ml-4 transition-transform duration-200 ease-in-out group-hover:translate-x-2" />
			</span>
		</Button>
	</Link>
));
FeatureCardLink.displayName = "FeatureCardLink";

export {
	FeatureCard,
	FeatureCardTitle,
	FeatureCardDescription,
	FeatureCardLink,
};
