import { cva, type VariantProps } from "class-variance-authority";

const navbar = cva("bg-gray-100 border border-b-1 py-4 px-6");

export interface NavbarProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbar> {
  children: any;
  backgroundColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <div style={{ backgroundColor }} className={navbar({})} {...props}>
        {children}
      </div>
    </>
  );
};
