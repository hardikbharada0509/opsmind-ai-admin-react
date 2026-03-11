import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils";

interface LoaderProps {
  className?: string;
  size?: number;
}

export const Loader: React.FC<LoaderProps> = ({ className, size = 24 }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-4", className)}>
      <Loader2 size={size} className="animate-spin text-slate-500" />
      <span className="mt-2 text-sm text-slate-500">Loading...</span>
    </div>
  );
};
