import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const FeatureCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-muted p-5 rounded-lg shadow-sm ${className}`}
    {...props}
  />
));
FeatureCard.displayName = "FeatureCard";

const FeatureCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={`text-sm font-semibold text-muted-foreground ${className}`}
    {...props}
  />
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
  <Button asChild variant="link" className={`gap-3 mt-4 px-0 ${className}`}>
    <Link ref={ref} {...props}>
      {children}
      <ArrowRightIcon className="w-4 h-4" />
    </Link>
  </Button>
));
FeatureCardLink.displayName = "FeatureCardLink";

export {
  FeatureCard,
  FeatureCardTitle,
  FeatureCardDescription,
  FeatureCardLink,
};
