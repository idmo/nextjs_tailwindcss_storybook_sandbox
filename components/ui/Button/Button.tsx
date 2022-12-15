import { type VariantProps } from "class-variance-authority";
import { theme } from "@/components/Brand";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof theme> {
  children: any;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  context,
  intent,
  className,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <button className={theme({ intent, context, className })} {...props}>
      {children}
    </button>
  );
};
