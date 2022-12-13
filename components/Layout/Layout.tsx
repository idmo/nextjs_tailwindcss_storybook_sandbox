import { cva, type VariantProps } from "class-variance-authority";

const layout = cva("bg-gray-100");

export interface LayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layout> {
  children: any;
  backgroundColor?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <div style={{ backgroundColor }} className={layout({})} {...props}>
        {children}
      </div>
    </>
  );
};
