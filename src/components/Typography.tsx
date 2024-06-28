import React, { ElementType } from "react";

// <Typography variant="h1" children="Hello, World!" />;

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "small";

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  color?: string; // New prop for text color
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body1: "p",
  body2: "p",
  body3: "p",
  body4: "p",
  small: "span",
};

const sizes: Record<Variant, string> = {
  h1: "text-6xl font-bold sm:text-6xl",
  h2: "text-4xl font-bold sm:text-3xl",
  h3: "text-3xl font-bold sm:text-2xl",
  h4: "text-2xl font-bold sm:text-1xl",
  h5: "text-xl font-bold sm:text-lg",
  body1: "text-lg sm:text-md",
  body2: "text-base sm:text-sm",
  body3: "text-sm sm:text-xs",
  body4: "text-xs sm:text-xxs",
  small: "text-sm sm:text-xs",
};

export const Typography = ({
  variant,
  children,
  className,
  as,
  color = "text-black",
}: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return (
    <Tag className={`${sizeClasses} ${color} ${className}`}>{children}</Tag>
  );
};

export default Typography;
