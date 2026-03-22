import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../utils"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean, variant?: "default" | "outline" | "ghost", size?: "default" | "sm" | "lg" | "icon" }>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    // Basic tailwind classes approximating Shadcn button
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-black text-white cursor-pointer hover:bg-black/90",
      outline: "border border-input bg-background hover:bg-slate-100 hover:text-slate-900",
      ghost: "hover:bg-slate-100 hover:text-slate-900"
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
