import { type VariantProps } from "class-variance-authority";
import { button } from "../../Brand/Brand";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: any;
  backgroundColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <button className={button({ intent, size })} {...props}>
      {children}
    </button>
  );
};
