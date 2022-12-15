import { type VariantProps } from "class-variance-authority";
import { theme } from "@/components/Brand";

export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof theme> {
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
      className={theme({ className })}
      {...props}
    >
      {children}
    </div>
  );
};
