import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-auto shrink-0 [&_svg]:shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring/90 aria-invalid:ring-destructive/20",

  {
    variants: {
      variant: {
        default:
        "bg-indigo-600 text-primary-foreground hover:bg-indigo-700 focus-visible:ring-indigo-600/60",

        secondaryBrand:
        "bg-indigo-50 text-primary hover:bg-indigo-100",

        secondary:
        "bg-secondary text-secondary-foreground hover:bg-gray-300",

        outlineBrand:
        "border border-indigo-300 text-primary hover:bg-indigo-100",

        outline:
        "border border-neutral-600/20 bg-transparent text-secondary-foreground hover:bg-gray-200/50 ",

        destructive:
        "bg-destructive text-white hover:bg-red-800 focus-visible:ring-destructive/60",

        destructiveOutline:
        "border border-red-300 text-destructive hover:bg-red-50 focus-visible:ring-destructive/60",

        success:
        "bg-success text-white hover:bg-green-800 focus-visible:ring-success/60",

        successOutline:
        "border border-green-300 text-success hover:bg-green-50 focus-visible:ring-success/60",

        ghost:
        " text-secondary-foreground hover:bg-accent hover:bg-gray-200/50 ",

        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        md: "h-10 px-4 py-2 [&_svg:not([class*='size-'])]:size-5",
        sm: "h-9 px-3 py-1.5 text-xs gap-1.5 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-12 px-5 py-2.5 text-base [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-9 p-0 [&_svg:not([class*='size-'])]:size-4", // 36x36 with 16px icon
        "icon-md": "size-10 p-0 [&_svg:not([class*='size-'])]:size-5", // 40x40 with 20px icon
        "icon-lg": "size-12 p-0 [&_svg:not([class*='size-'])]:size-5", // 48x48 with 20px icon
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row",
      },
      fullWidth: {
        true: "w-full",
      },
      // New variants for handling icon padding
      hasStartIcon: {
        true: "",
      },
      hasEndIcon: {
        true: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      iconPosition: "left",
      fullWidth: false,
      hasStartIcon: false,
      hasEndIcon: false,
    },
    compoundVariants: [
      // Adjust spacing when icons are present
      {
        iconPosition: "left",
        size: "sm",
        class: "gap-1", // 4px
      },
      {
        iconPosition: "right",
        size: "sm",
        class: "gap-1", // 4px
      },
      {
        iconPosition: "left",
        size: "md",
        class: "gap-1", // 4px
      },
      {
        iconPosition: "right",
        size: "md",
        class: "gap-1", // 4px
      },
      {
        iconPosition: "left",
        size: "lg",
        class: "gap-1.5", // 6px
      },
      {
        iconPosition: "right",
        size: "lg",
        class: "gap-1.5", // 6px
      },
      
      // Adjust padding for buttons with icons
      // Small button with start icon (reduced left padding)
      {
        size: "sm",
        hasStartIcon: true,
        class: "pl-2.5 pr-3", // 10px left, 12px right
      },
      // Small button with end icon (reduced right padding)
      {
        size: "sm",
        hasEndIcon: true,
        class: "pl-3 pr-2.5", // 12px left, 10px right
      },
      // Medium button with start icon (reduced left padding)
      {
        size: "md",
        hasStartIcon: true,
        class: "pl-3.5 pr-4", // 14px left, 16px right
      },
      // Medium button with end icon (reduced right padding)
      {
        size: "md",
        hasEndIcon: true,
        class: "pl-4 pr-3.5", // 16px left, 14px right
      },
      // Large button with start icon (reduced left padding)
      {
        size: "lg",
        hasStartIcon: true,
        class: "pl-4 pr-5", // 16px left, 20px right
      },
      // Large button with end icon (reduced right padding)
      {
        size: "lg",
        hasEndIcon: true,
        class: "pl-5 pr-4", // 20px left, 16px right
      },
      // Handle both start and end icons
      {
        hasStartIcon: true,
        hasEndIcon: true,
        size: "sm",
        class: "pl-2.5 pr-2.5", // 10px both sides
      },
      {
        hasStartIcon: true,
        hasEndIcon: true,
        size: "md",
        class: "pl-3.5 pr-3.5", // 14px both sides
      },
      {
        hasStartIcon: true,
        hasEndIcon: true,
        size: "lg",
        class: "pl-4 pr-4", // 16px both sides
      },
      // Link variant with icons should have appropriate spacing but no padding/height
      {
        variant: "link",
        hasStartIcon: true,
        class: "gap-1.5 p-0 h-auto",
      },
      {
        variant: "link",
        hasEndIcon: true,
        class: "gap-1.5 p-0 h-auto",
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      startIcon,
      endIcon,
      children,
      iconPosition: iconPositionProp,
      ...props // Destructure props to exclude startIcon and endIcon
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Fix the icon position logic
    const iconPosition = iconPositionProp || (endIcon && !startIcon ? "right" : "left");

    const hasStartIcon = Boolean(startIcon);
    const hasEndIcon = Boolean(endIcon);
    const isIconOnly = !children && (hasStartIcon || hasEndIcon);
    const isLink = variant === "link";

    // Automatically select icon size variant if it's an icon-only button
    let effectiveSize = size;
    if (isIconOnly && !String(size).startsWith("icon-") && !isLink) {
      if (size === "sm") effectiveSize = "icon-sm";
      else if (size === "lg") effectiveSize = "icon-lg";
      else effectiveSize = "icon-md"; // Default to medium if unspecified
    }

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size: effectiveSize,
            fullWidth,
            iconPosition,
            hasStartIcon: !isIconOnly && hasStartIcon,
            hasEndIcon: !isIconOnly && hasEndIcon,
            className,
          })
        )}
        ref={ref}
        {...props} // Spread remaining props (excluding startIcon and endIcon)
      >
        {isIconOnly ? (
          <span className="flex items-center justify-center">
            {startIcon || endIcon}
          </span>
        ) : (
          <>
            {iconPosition === "left" && hasStartIcon && (
              <span className="shrink-0">{startIcon}</span>
            )}
            {children}
            {iconPosition === "right" && hasEndIcon && (
              <span className="shrink-0">{endIcon}</span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };