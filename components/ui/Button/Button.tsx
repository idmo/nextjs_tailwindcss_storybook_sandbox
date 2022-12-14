import { type VariantProps } from "class-variance-authority";
import { button } from "@/components/Brand";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: any;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  context,
  intent,
  size,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <button className={button({ intent, size, context })} {...props}>
      {children}
    </button>
  );
};
