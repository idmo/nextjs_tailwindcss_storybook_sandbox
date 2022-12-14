import { cva, type VariantProps } from "class-variance-authority";

const box = cva(
  "box p-10 flex items-center justify-center rounded-md border border-gray-400",
  {
    variants: {
      intent: {
        primary: "text-black bg-white",
        secondary: "text-gray-50 bg-gray-500",
      },

      /**
       * Toggle to expand to fill width of the viewport
       */

      fullWidth: {
        true: "w-full",
        false: "w-1/4",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof box> {
  children: any;
  backgroundColor?: string;
  fullWidth: boolean;
}

export const Box: React.FC<BoxProps> = ({
  intent,
  fullWidth,
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className={box({ intent, fullWidth })}
      {...props}
    >
      {children}
    </div>
  );
};
