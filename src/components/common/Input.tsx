import { forwardRef } from "react";
import type { InputProps } from "../ui/input";
import { Input as ShadcnInput } from "../ui/input";

interface CommonInputProps extends InputProps {
  label?: string;
  error?: string;
}

/**
 * Custom wrapper for Shadcn Input.
 * As per rules, we do not use raw HTML <input> tags in our pages.
 */
export const Input = forwardRef<HTMLInputElement, CommonInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
        <ShadcnInput ref={ref} className={className} {...props} />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "CommonInput";
