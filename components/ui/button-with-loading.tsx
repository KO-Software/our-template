'use client';

import { Button as ShadcnButton } from "@/components/ui/button"
import { ButtonProps as ShadcnButtonProps } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { forwardRef } from "react"

interface ButtonProps extends ShadcnButtonProps {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, disabled, ...props }, ref) => {
    return (
      <ShadcnButton
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {children}
          </>
        ) : (
          children
        )}
      </ShadcnButton>
    )
  }
)
Button.displayName = "Button"

export { Button } 