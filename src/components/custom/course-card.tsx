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

interface CourseCardLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  variant?: "primary" | "secondary";
}

const CourseCardLink = React.forwardRef<HTMLAnchorElement, CourseCardLinkProps>(
  ({ children, variant = "primary", ...props }, ref) => {
    const buttonClass =
      variant === "primary"
        ? "rounded-none group"
        : "border-primary border rounded-none group bg-background text-primary hover:bg-accent";
    return (
      <Link {...props} passHref>
        <Button className={buttonClass}>
          {children}
          <ArrowRightIcon
            className={`w-4 h-4 ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-2 ${
              variant === "primary" ? "text-background" : "text-primary"
            }`}
          />
        </Button>
      </Link>
    );
  },
);
CourseCardLink.displayName = "CourseCardLink";

interface LinkData {
  href: string;
  text: string;
  variant: string;
}

interface CourseCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  links: LinkData[];
}

const CourseCardFooter = React.forwardRef<
  HTMLDivElement,
  CourseCardFooterProps
>(({ rating, links, className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center justify-between mt-6 ${className}`}
    {...props}
  >
    <div className="flex flex-col gap-2">
      {links.map((link, index) => (
        <CourseCardLink key={index} href={link.href} variant={link.variant}>
          {link.text}
        </CourseCardLink>
      ))}
    </div>
    <CourseCardRating rating={rating} />
  </div>
));
CourseCardFooter.displayName = "CourseCardFooter";

export {
  CourseCard,
  CourseCardCode,
  CourseCardTitle,
  CourseCardRating,
  CourseCardLink,
  CourseCardFooter,
};
