import React from "react";
import { LucideIcon } from "lucide-react"; // Import LucideIcon type
import clsx from "clsx"; // Utility for conditional class names

interface FeaturedIconProps {
  color: string;
  icon: LucideIcon;
}

const FeaturedIcon: React.FC<FeaturedIconProps> = ({ color, icon: Icon }) => {
  // Derive the outline color based on the provided color
  const auraColor = color.replace("-600", "-200");

  return (
    <>
    <div
      className={clsx(
        "inline-flex size-6 items-center justify-center rounded-full",
        `text-${color}`,
        `bg-${auraColor}`
      )}
      style={{
        boxShadow: `0 0 0 8px var(--color-${auraColor})`,
      }}
    >
      <Icon size={16} className={`size-6 h-5 w-5 text-${color}`} />
    </div>
</>
  );
};

export default FeaturedIcon;