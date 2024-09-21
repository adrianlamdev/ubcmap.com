import Link from "next/link";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <nav className="border-b mx-auto max-w-5xl px-6 py-3 md:h-screen md:max-h-[950px] md:max-w-7xl flex items-center justify-between">
      <Link href="/" className="font-bold tracking-tight text-xl">
        ubcmap
      </Link>
      <Button size="icon" variant="ghost" className="rounded-[0.5rem]">
        <HamburgerMenuIcon className="w-4 h-4" />
      </Button>
    </nav>
  );
}
