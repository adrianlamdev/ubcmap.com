import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[hsl(0, 0, 20)]", className)}
      {...props}
    />
  );
}

export { Skeleton };
