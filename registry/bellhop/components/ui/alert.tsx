import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import FeaturedIcon from "./featured-icon"
import { Lightbulb, Info, AlertTriangle, OctagonAlert, CheckCircle, BadgeInfo } from "lucide-react" // Import icons

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid grid-cols-[auto_1fr] gap-4 items-center", // Adjusted grid layout
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90",
        neutral: "bg-gray-100 text-gray-800 border-gray-300",
        brand: "bg-indigo-100 text-indigo-800 border-indigo-300",
        warning: "bg-amber-100 text-amber-800 border-amber-300",
        error: "bg-red-100 text-red-800 border-red-300",
        success: "bg-green-100 text-green-800 border-green-300",
        feature: "bg-purple-100 text-purple-800 border-purple-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  const icons = {
    neutral: Lightbulb,
    brand: Info,
    warning: AlertTriangle,
    error: OctagonAlert,
    success: CheckCircle,
    feature: BadgeInfo,
  };

  const Icon = icons[variant as keyof typeof icons] || null;

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {Icon && (
        <FeaturedIcon
          color={
            {
              neutral: "neutral-600",
              brand: "indigo-600",
              warning: "amber-600",
              error: "red-600",
              success: "green-600",
              feature: "purple-600",
            }[variant as keyof typeof icons] || "neutral-600"
          }
          icon={Icon}
        />
      )}
      <div>{children}</div> {/* Render children */}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium ",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
