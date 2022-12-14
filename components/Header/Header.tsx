import { type VariantProps } from "class-variance-authority";

import { header } from "../Brand/Brand";

export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof header> {
  children: any;
  backgroundColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className={header({ className })}
      {...props}
    >
      {children}
    </div>
  );
};
