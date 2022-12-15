import { cva, type VariantProps } from "class-variance-authority";

import { theme } from "@/components/Brand";

export interface FooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof theme> {
  children: any;
  backgroundColor?: string;
}

export const Footer: React.FC<FooterProps> = ({
  padding,
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <div
        style={{ backgroundColor }}
        className={theme({ padding })}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
