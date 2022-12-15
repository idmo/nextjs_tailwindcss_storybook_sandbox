import { type VariantProps } from "class-variance-authority";

import { theme } from "@/components/Brand";

export interface LayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof theme> {
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
      <div style={{ backgroundColor }} className={theme({})} {...props}>
        {children}
      </div>
    </>
  );
};
