import { cn } from "@/lib/utils";

export default function PageContainer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<main
			className={cn(
				"mx-auto max-w-5xl px-6 md:h-screen md:max-h-[950px] md:max-w-7xl",
				className,
			)}
		>
			{children}
		</main>
	);
}
