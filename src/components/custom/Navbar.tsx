"use client";
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
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`border-border-ghost sticky top-0 z-50 w-full bg-background transition-colors duration-300 ${scrolled ? "border-b" : ""}`}
    >
      <header className="px-6 py-3 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-bold tracking-tight text-xl text-foreground"
          >
            ubcmap
          </Link>
          <Sheet>
            <SheetTrigger>
              <Button size="icon" variant="ghost" className="rounded-[0.5rem]">
                <HamburgerMenuIcon className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </div>
  );
}
