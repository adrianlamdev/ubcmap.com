/*
 * Custom component from mxkaske
 */

"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// FIXME: https://twitter.com/lemcii/status/1659649371162419202?s=46&t=gqNnMIjMWXiG2Rbrr5gT6g
// Removing states would help maybe?

type Course = Record<"value" | "label" | "color", string>;

const COURSES = [
	// {
	//   value: "next.js",
	//   label: "Next.js",
	//   color: "#ef4444",
	// },
	{
		value: "cpenv",
		label: "CPEN",
		color: "#eab308",
	},
	// {
	//   value: "nuxt.js",
	//   label: "Nuxt.js",
	//   color: "#22c55e",
	// },
	{
		value: "mathv",
		label: "MATH",
		color: "#06b6d4",
	},
	// {
	//   value: "astro",
	//   label: "Astro",
	//   color: "#3b82f6",
	// },
	// {
	//   value: "wordpress",
	//   label: "WordPress",
	//   color: "#8b5cf6",
	// },
] satisfies Course[];

const badgeStyle = (color: string) => ({
	borderColor: `${color}20`,
	backgroundColor: `${color}30`,
	color,
});

export function FancyBox() {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [courses, setCourses] = React.useState<Course[]>(COURSES);
	const [openCombobox, setOpenCombobox] = React.useState(false);
	const [inputValue, setInputValue] = React.useState<string>("");
	const [selectedValues, setSelectedValues] = React.useState<Course[]>([
		COURSES[0],
	]);

	const toggleCourse = (course: Course) => {
		setSelectedValues((currentCourses) =>
			!currentCourses.includes(course)
				? [...currentCourses, course]
				: currentCourses.filter((l) => l.value !== course.value),
		);
		inputRef?.current?.focus();
	};

	const onComboboxOpenChange = (value: boolean) => {
		inputRef.current?.blur(); // HACK: otherwise, would scroll automatically to the bottom of page
		setOpenCombobox(value);
	};

	return (
		<div className="max-w-[200px]">
			<Popover open={openCombobox} onOpenChange={onComboboxOpenChange}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={openCombobox}
						className="w-[200px] justify-between text-foreground"
					>
						<span className="truncate">
							{selectedValues.length === 0 && "Select labels"}
							{selectedValues.length === 1 && selectedValues[0].label}
							{selectedValues.length === 2 &&
								selectedValues.map(({ label }) => label).join(", ")}
							{selectedValues.length > 2 &&
								`${selectedValues.length} labels selected`}
						</span>
						<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command loop>
						<CommandInput
							ref={inputRef}
							placeholder="Search course..."
							value={inputValue}
							onValueChange={setInputValue}
						/>
						<CommandList>
							<CommandGroup className="max-h-[145px] overflow-auto">
								{courses.map((course) => {
									const isActive = selectedValues.includes(course);
									return (
										<CommandItem
											key={course.value}
											value={course.value}
											onSelect={() => toggleCourse(course)}
										>
											<CheckIcon
												className={cn(
													"mr-2 h-4 w-4",
													isActive ? "opacity-100" : "opacity-0",
												)}
											/>
											<div className="flex-1">{course.label}</div>
											<div
												className="h-4 w-4 rounded-full"
												style={{ backgroundColor: course.color }}
											/>
										</CommandItem>
									);
								})}
							</CommandGroup>
							<CommandSeparator alwaysRender />
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<div className="relative -mb-24 mt-3 h-24 overflow-y-auto">
				{selectedValues.map(({ label, value, color }) => (
					<Badge
						key={value}
						variant="outline"
						style={badgeStyle(color)}
						className="mb-2 mr-2 rounded-md"
					>
						{label}
					</Badge>
				))}
			</div>
		</div>
	);
}
