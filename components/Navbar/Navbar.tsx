import { type VariantProps } from "class-variance-authority";
import { theme } from "@/components/Brand";

export interface NavbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof theme> {
  children: any;
  backgroundColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  orientation,
  padding,
  children,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <div
        style={{ backgroundColor }}
        className={theme({ orientation, padding, className })}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
