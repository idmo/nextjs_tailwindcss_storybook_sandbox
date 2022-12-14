import { type VariantProps } from "class-variance-authority";
import { navbar } from "@/components/Brand";

export interface NavbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbar> {
  children: any;
  backgroundColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  size,
  border,
  children,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <div
        style={{ backgroundColor }}
        className={navbar({ size, border, className })}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
