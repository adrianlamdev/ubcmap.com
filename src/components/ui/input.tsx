import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef(
  (
    {
      className,
      type,
      startIcon: StartIcon,
      endIcon: EndIcon,
      onStartIconClick,
      onEndIconClick,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full relative flex items-center">
        {StartIcon && (
          <button
            className="absolute left-3 top-10 text-center transition-all disabled:pointer-events-none disabled:opacity-50"
            type="button"
            onClick={onStartIconClick}
          >
            <StartIcon className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            StartIcon && "pl-10",
            EndIcon && "pr-10",
            className,
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <button
            className="absolute right-3 text-center transition-all disabled:pointer-events-none disabled:opacity-50"
            type="button"
            onClick={onEndIconClick}
          >
            <EndIcon className="w-4 h-4 text-foreground" />
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
