import { type VariantProps } from "class-variance-authority";
import { theme } from "@/components/Brand";

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  foo: VariantProps<typeof theme>;
  backgroundColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  foo,
  children,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <div style={{ backgroundColor }} className={theme(foo)} {...props}>
        {children}
      </div>
    </>
  );
};
