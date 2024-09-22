import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl";
  padding?: "sm" | "md" | "lg";
}

export default function PageContainer({
  children,
  className,
  fullHeight = false,
  maxWidth = "7xl",
  padding = "md",
}: PageContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "7xl": "max-w-7xl",
  };

  const paddingClasses = {
    sm: "px-4",
    md: "px-6",
    lg: "px-8",
  };

  return (
    <main
      role="main"
      className={cn(
        "mx-auto",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        fullHeight && "min-h-screen",
        className,
      )}
    >
      {children}
    </main>
  );
}
