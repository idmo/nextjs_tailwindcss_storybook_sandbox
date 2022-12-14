import { cva } from "class-variance-authority";

export const brand = cva("bg-purple-200");

export const theme = cva("", {
  variants: {
    intent: {
      alert: "bg-alert-700 text-alert-100",
      danger: "bg-danger-700 text-danger-100",
      primary: "bg-primary-700 text-primary-100",
      secondary: "bg-secondary-700 text-secondary-100",
    },
    padding: {
      small: "p-4",
      medium: "p-8",
      large: "p-12",
    },
    orientation: {
      vertical: "flex flex-col items-left space-y-2",
      horiztonal: "flex flex-row items-center space-x-2",
    },
    context: {
      menu: "text-center",
      navigation: "text-left",
    },
    element: {
      container: "mx-auto max-w-7xl sm:px-6 lg:px-8",
    },
  },
});

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

export const button = cva("py-1.5 px-2 rounded-2xl font-semibold uppercase", {
  variants: {
    intent: {
      alert: "bg-alert-700 text-alert-100",
      danger: "bg-danger-700 text-danger-100",
      primary: "bg-primary-700 text-primary-100",
      secondary: "bg-secondary-700 text-secondary-100",
    },
    context: {
      menu: "",
      navigation: "",
    },
    size: {
      small: "text-sm",
      medium: "text-lg",
      large: "text-xl",
    },
  },
});

export const vstack = cva("flex flex-col justify-start space-y-2");

export const hstack = cva("flex flex-row justify-start space-x-2");
