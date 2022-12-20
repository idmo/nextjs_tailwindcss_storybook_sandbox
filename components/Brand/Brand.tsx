import { cva } from "class-variance-authority";

export const brand = cva("bg-purple-200");

const contexts = {
  menu: "rounded text-center",
  navigation: "",
  panel: "",
  modal: "",
};

const buttonContexts = {
  action: "rounded-md px-2 py-0.5 text-sm",
  link: "p-0 border-none hover:text-gray-600",
  navigation: "",
  menu: "",
};

const intents = {
  success: "border-2 border-succes-800 text-success-800",
  warning: "border-2 border-alert-800 text-alert-800",
  danger: "border-2 border-danger-800 text-danger-800",
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-secondary-100 text-secondary-800",
};

export const alert = cva(
  "flex rounded-md shadow-lg p-4 [&_header]:font-bold [&_main]:text-black [&_main]:flex-shrink-0 [&_main]:py-3 [&_section]:ml-3 [&_section]:w-full [&_footer]:space-x-1 [&_footer]:float-right [&_footer]:pr-4",
  {
    variants: {
      intent: intents,
    },
  }
);

export const theme = cva("", {
  variants: {
    intent: intents,
    context: contexts,
    padding: {
      small: "p-4",
      medium: "p-8",
      large: "p-12",
    },
    weight: {
      bold: "font-semibold",
      light: "font-extralight",
    },
    orientation: {
      vertical: "flex flex-col items-left space-y-2",
      horiztonal: "flex flex-row items-center space-x-2",
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

export const button = cva("font-semibold uppercase", {
  variants: {
    intent: intents,
    context: buttonContexts,
    size: {
      small: "text-sm",
      medium: "text-lg",
      large: "text-xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const vstack = cva("flex flex-col justify-start space-y-2");

export const hstack = cva("flex flex-row justify-start space-x-2");
