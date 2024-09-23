import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";

export default function Navbar() {
  return (
    <header className="border-b px-6 py-3 bg-background z-50">
      <nav className="mx-auto max-w-5xl md:max-w-7xl flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-xl">
          ubcmap
        </Link>
        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="ghost" className="rounded-[0.5rem]">
              <HamburgerMenuIcon className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
