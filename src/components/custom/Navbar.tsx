import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
	return (
		<header className="border-b px-6 py-3 bg-background z-50">
			<nav className="mx-auto max-w-5xl md:max-w-7xl flex items-center justify-between">
				<Link href="/" className="font-bold tracking-tight text-xl">
					ubcmap
				</Link>
				<Button size="icon" variant="ghost" className="rounded-[0.5rem]">
					<HamburgerMenuIcon className="w-4 h-4" />
				</Button>
			</nav>
		</header>
	);
}
