import { type VariantProps } from "class-variance-authority";
import { button } from "@/components/Brand";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  /** Determines when and where to use a button */
  context,
  /** Not sure we even need it for a button */
  intent,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button className={button({ intent, context, size, className })} {...props}>
      {children}
    </button>
  );
};
