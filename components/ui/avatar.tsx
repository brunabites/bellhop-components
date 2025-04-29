"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

// Define a set of Tailwind colors for randomization
const avatarColors = [
  "bg-green-600/80",
  "bg-red-600/80",
  "bg-blue-600/80",
  "bg-pink-600/80",
  "bg-rose-600/80",
  "bg-yellow-600/80",
  "bg-amber-600/80",
  "bg-orange-600/80",
  "bg-violet-600/80",
  "bg-fuchsia-600/80",
  "bg-purple-600/80",
  "bg-sky-600/80",
  "bg-teal-600/80",
  "bg-cyan-600/80",
  "bg-lime-600/80",
  "bg-emerald-600/80",
];

// Get a color based on a string (like initials or username)
function getColorFromString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % avatarColors.length;
  return avatarColors[index];
}

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {
  color?: string;
  randomizeColor?: boolean;
}

function AvatarFallback({
  className,
  color,
  randomizeColor = false,
  children,
  ...props
}: AvatarFallbackProps) {
  // Determine the background color
  const bgColor = React.useMemo(() => {
    if (color) return color;
    
    if (randomizeColor) {
      if (typeof children === 'string') {
        // Use the children string (typically initials) to determine color
        return getColorFromString(children);
      } else {
        // Fallback to random color if children is not a string
        const randomIndex = Math.floor(Math.random() * avatarColors.length);
        return avatarColors[randomIndex];
      }
    }
    
    return "bg-indigo-600/80"; // Default fallback
  }, [color, randomizeColor, children]);

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex font-medium text-white/90 size-full items-center justify-center rounded-full",
        bgColor,
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  )
}

export { Avatar, AvatarImage, AvatarFallback }