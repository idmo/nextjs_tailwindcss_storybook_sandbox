import { cva } from "class-variance-authority";

export const brand = cva("bg-purple-200");

const contexts = {
  menu: "rounded text-center",
  navigation: "",
  panel: "",
  modal: "",
};

const buttonContexts = {
  /** Performs a specific function like new item */
  action: "rounded-md px-2 py-0.5 ring-1",
  /** Text-only button */
  link: "p-0 border-none",
  /** Takes user to a different section of the app */
  navigation: "",
  /** One of many functions available */
  menu: "",
  /** Standard button */
  default: "ring-1 rounded",
};

const sizes = {
  xs: "text-xs px-1.5 py-1",
  sm: "text-sm px-1.5 py-1",
  md: "text-base px-1 py-1",
  lg: "text-xl px-1.5 py-1.5",
  xl: "text-xl px-2 py-2",
};

const intents = {
  success: "ring-success-800 bg-success-50 text-success-800",
  warning: "ring-warning-800 bg-warning-50 text-alert-800",
  danger: "ring-danger-800 bg-danger-50 text-danger-800",
  primary: "ring-primary-800 bg-primary-50 text-primary-800",
  secondary: "ring-secondary-800 bg-secondary-50 text-secondary-800",
  info: "ring-info-800 bg-info-50 text-info-800",
};

export const action = cva(
  "text-sm p-1.5 ring-1 rounded uppercase tracking-wide flex item-center",
  {
    variants: {
      context: {
        create: "before:content-['➕']",
        delete: "before:content-['➖']",
        cancel: "before:content-['✖️']",
        more: "before:content-['•••']",
        info: "before:content-['ℹ️']",
      },
    },
  }
);

export const alert = cva(
  "flex rounded-md p-4 [&_header]:font-bold [&_main]:text-black [&_main]:flex-shrink-0 [&_main]:py-3 [&_section]:ml-3 [&_section]:w-full [&_footer]:space-x-1 [&_footer]:float-right [&_footer]:pr-4 ring-1",
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

export const button = cva("font-semibold uppercase tracking-wide", {
  variants: {
    intent: intents,
    context: buttonContexts,
    size: sizes,
  },
  defaultVariants: {
    size: "md",
  },
});

export const vstack = cva("flex flex-col justify-start space-y-2");

export const hstack = cva("flex flex-row justify-start space-x-2");
