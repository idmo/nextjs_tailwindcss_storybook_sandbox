import { type VariantProps } from "class-variance-authority";

import { hstack } from "@/components/Brand";

export interface HStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof hstack> {
  children: any;
  backgroundColor?: string;
}

export const HStack: React.FC<HStackProps> = ({
  children,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className={hstack({ className })}
      {...props}
    >
      {children}
    </div>
  );
};
