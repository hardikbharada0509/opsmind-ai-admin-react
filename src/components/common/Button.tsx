import React from "react";
import { Button as ShadcnButton } from "../ui/button";

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button: React.FC<CommonButtonProps> = ({ 
  children, 
  isLoading, 
  disabled, 
  ...props 
}) => {
  return (
    <ShadcnButton disabled={isLoading || disabled} {...props}>
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </ShadcnButton>
  );
};
