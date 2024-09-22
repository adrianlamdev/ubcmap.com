import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";

const CourseCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`w-full border p-6 ${className}`} {...props} />
));
CourseCard.displayName = "CourseCard";

const CourseCardCode = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-muted-foreground text-sm leading-none ${className}`}
    {...props}
  />
));
CourseCardCode.displayName = "CourseCardCode";

const CourseCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`mt-2 text-lg leading-6 ${className}`} {...props} />
));
CourseCardTitle.displayName = "CourseCardTitle";

const CourseCardRating = React.forwardRef<
  HTMLDivElement,
  { rating: number } & React.HTMLAttributes<HTMLDivElement>
>(({ rating, className, ...props }, ref) => (
  <div ref={ref} className={`flex items-center ${className}`} {...props}>
    <span className="text-primary font-semibold mr-1 text-2xl">
      {rating.toFixed(1)}
    </span>
    <span className="text-muted-foreground text-sm">/ 5.0</span>
  </div>
));
CourseCardRating.displayName = "CourseCardRating";

const CourseCardLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link> & {
    variant?: "primary" | "secondary";
  }
>(({ className, children, variant = "primary", ...props }, ref) => {
  const buttonClass =
    variant === "primary"
      ? "rounded-none group"
      : "border-primary border rounded-none group bg-background text-primary hover:bg-accent";

  return (
    <div
      className={`flex items-center group ${variant === "primary" ? "mt-6" : "mt-2"}`}
    >
      <Button className={buttonClass}>
        {children}
        <ArrowRightIcon
          className={`w-4 h-4 ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-2 ${variant === "primary" ? "text-background" : "text-primary"}`}
        />
      </Button>
    </div>
  );
});
CourseCardLink.displayName = "CourseCardLink";

export {
  CourseCard,
  CourseCardCode,
  CourseCardTitle,
  CourseCardRating,
  CourseCardLink,
};
