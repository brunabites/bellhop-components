"use client";

import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext } from "react";

import { X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const BadgeContext = createContext<{ size: "sm" | "md" }>({ size: "sm" });

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 font-medium transition-colors w-fit whitespace-nowrap shrink-0 inline-flex [&>svg]:size-3 [&>svg]:gap-1 [&>svg]:pointer-events-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        solid: "border-transparent",
        outline: "border",
        ghost: "border",
      },
      color: {
        white: "",
        neutral: "",
        indigo: "",
        blue: "",
        red: "",
        pink: "",
        orange: "",
        yellow: "",
        green: "",
        teal: "",
        purple: "",
      },
      size: {
        sm: "text-xs rounded-full px-2 py-0.5 h-6",
        md: "text-sm rounded-full px-3 py-1 h-7",
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        color: "white",
        className: "bg-neutral-100 text-neutral-800"
      },
      {
        variant: "solid",
        color: "neutral",
        className: "bg-neutral-200/90 text-neutral-800"
      },
      {
        variant: "solid",
        color: "indigo",
        className: "bg-indigo-200 text-indigo-800"
      },
      {
        variant: "solid",
        color: "blue",
        className: "bg-blue-200 text-blue-800"
      },
      {
        variant: "solid",
        color: "red",
        className: "bg-red-200 text-red-800"
      },
      {
        variant: "solid",
        color: "pink",
        className: "bg-pink-200 text-pink-800"
      },
      {
        variant: "solid",
        color: "orange",
        className: "bg-orange-200 text-orange-800"
      },
      {
        variant: "solid",
        color: "yellow",
        className: "bg-amber-200 text-amber-800"
      },
      {
        variant: "solid",
        color: "green",
        className: "bg-green-200 text-green-800"
      },
      {
        variant: "solid",
        color: "teal",
        className: "bg-teal-200 text-teal-800"
      },
      {
        variant: "solid",
        color: "purple",
        className: "bg-purple-200 text-purple-800"
      },
      
      // Outline variants
      {
        variant: "outline",
        color: "white",
        className: "border-neutral-300 bg-neutral-50/90 text-neutral-800"
      },
      {
        variant: "outline",
        color: "neutral",
        className: "border-neutral-300 bg-neutral-50 text-neutral-800"
      },
      {
        variant: "outline",
        color: "indigo",
        className: "border-indigo-300 bg-indigo-50 text-indigo-800"
      },
      {
        variant: "outline",
        color: "blue",
        className: "border-blue-300 bg-blue-50 text-blue-800"
      },
      {
        variant: "outline",
        color: "red",
        className: "border-red-300 bg-red-50 text-red-800"
      },
      {
        variant: "outline",
        color: "pink",
        className: "border-pink-300 bg-pink-50 text-pink-800"
      },
      {
        variant: "outline",
        color: "orange",
        className: "border-orange-300 bg-orange-50 text-orange-800"
      },
      {
        variant: "outline",
        color: "yellow",
        className: "border-amber-300 bg-amber-50 text-amber-800"
      },
      {
        variant: "outline",
        color: "green",
        className: "border-green-300 bg-green-50 text-green-800"
      },
      {
        variant: "outline",
        color: "teal",
        className: "border-teal-300 bg-teal-50 text-teal-800"
      },
      {
        variant: "outline",
        color: "purple",
        className: "border-purple-300 bg-purple-50 text-purple-800"
      },
      
      // Ghost variants
      {
        variant: "ghost",
        color: "white",
        className: "border-neutral-100 bg-transparent text-neutral-700"
      },
      {
        variant: "ghost",
        color: "neutral",
        className: "border-neutral-300 bg-transparent text-neutral-800"
      },
      {
        variant: "ghost",
        color: "indigo",
        className: "border-indigo-300 bg-transparent text-indigo-800"
      },
      {
        variant: "ghost",
        color: "blue",
        className: "border-blue-300 bg-transparent text-blue-800"
      },
      {
        variant: "ghost",
        color: "red",
        className: "border-red-300 bg-transparent text-red-800"
      },
      {
        variant: "ghost",
        color: "pink",
        className: "border-pink-300 bg-transparent text-pink-800"
      },
      {
        variant: "ghost",
        color: "orange",
        className: "border-orange-300 bg-transparent text-orange-800"
      },
      {
        variant: "ghost",
        color: "yellow",
        className: "border-amber-300 bg-transparent text-amber-800"
      },
      {
        variant: "ghost",
        color: "green",
        className: "border-green-300 bg-transparent text-green-800"
      },
      {
        variant: "ghost",
        color: "teal",
        className: "border-teal-300 bg-transparent text-teal-800"
      },
      {
        variant: "ghost",
        color: "purple",
        className: "border-purple-300 bg-transparent text-purple-800"
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "neutral",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  variant,
  color,
  size = "sm", // Default size
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  // Ensure size is always "sm" or "md"
  const validSize = size === "sm" || size === "md" ? size : "sm";

  return (
    <BadgeContext.Provider value={{ size: validSize }}>
      <Comp
        data-slot="badge"
        className={cn(
          badgeVariants({
            variant,
            color,
            size: validSize,
          }),
          className
        )}
        {...props}
      />
    </BadgeContext.Provider>
  );
}

// Icon badge
const BadgeIcon = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}) => {
  const { size } = useContext(BadgeContext); // Get size from context
  const sizeClasses = size === "sm" ? "w-3 h-3" : "!w-4 !h-4"; // Adjust size based on Badge size

  return (
    <span
      className={cn(
        "inline-block", // Container styling
        sizeClasses, // Apply size to container
        className
      )}
      {...props}
    >
      {React.isValidElement(children) &&
        React.cloneElement(children, {
          className: cn(sizeClasses, children.props.className), // Apply size to <svg>
        })}
    </span>
  );
};

// Dot indicator
const BadgeDot = ({
  className,
  color = "neutral",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  color?: string;
}) => {
  const dotColor = 
    color === "neutral" ? "bg-neutral-700" :
    color === "blue" ? "bg-blue-700" :
    color === "indigo" ? "bg-indigo-800" :
    color === "red" ? "bg-red-700" :
    color === "pink" ? "bg-pink-700" :
    color === "orange" ? "bg-orange-700" :
    color === "yellow" ? "bg-amber-700" :
    color === "green" ? "bg-green-700" :
    color === "teal" ? "bg-teal-700" :
    color === "purple" ? "bg-purple-700":
    "bg-neutral-700";
  return (
    <span
      className={cn(
        "inline-block rounded-full w-1.5 h-1.5",
        dotColor,
        className
      )}
      {...props}
    />
  );
};

// Avatar component for badge
const BadgeAvatar = ({
  src,
  alt = "Avatar",
  size = "sm",
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: "sm" | "md";
}) => {
  return (
    <span className="flex">
      <img 
        src={src}
        alt={alt}
        className={cn(
          "rounded-full object-cover",
          size === "sm" ? "w-4 h-4" : "w-5 h-5",
          className
        )}
        {...props}
      />
    </span>
  );
};

// Close button for badge
const BadgeClose = ({
  size = "sm",
  onClick,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md";
}) => {
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={cn(
        "rounded-full hover:bg-neutral-200 flex items-center justify-center w-4 h-4",
        className
      )}
      {...props}
    >
      <X className={"w-4 h-4"} />
    </button>
  );
};

Badge.Icon = BadgeIcon;
Badge.Dot = BadgeDot;
Badge.Avatar = BadgeAvatar;
Badge.Close = BadgeClose;

export { Badge, badgeVariants };