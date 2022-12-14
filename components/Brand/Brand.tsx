import { cva } from "class-variance-authority";

export const brand = cva("bg-purple-200");

export const avatar = cva(
  "rounded-full border-2 border-gray-500 flex flex-col text-center justify-center align-middle font-semibold bg-gray-50",
  {
    variants: {
      size: {
        small: "h-6 w-6 text-sm",
        medium: "h-9 w-9 text-md",
        large: "h-12 w-12 text-2xl",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export const navbar = cva("px-4 flex flex-row justify-between", {
  variants: {
    /** Determines the height of the Navigation Box */
    size: {
      small: "py-2 text-sm",
      medium: "py-4 text-lg",
      large: "py-8 text-xl font-semibold",
    },

    /** Determines type of border */
    border: {
      thin: "border-b border-black",
      thick: "border-b-2 border-black",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const button = cva(
  "bg-gray-200 py-1.5 px-2 rounded-2xl font-semibold uppercase",
  {
    variants: {
      intent: {
        alert: "bg-yellow-300",
        danger: "bg-red-600 text-red-100",
        navigation: "rounded-sm px-8",
      },
      size: {
        small: "text-sm",
        medium: "text-lg",
        large: "text-xl",
      },
    },
  }
);
