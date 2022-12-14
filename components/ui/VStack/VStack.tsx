import { type VariantProps } from "class-variance-authority";
import { vstack } from "@/components/Brand";

export interface VStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof vstack> {
  children: any;
  backgroundColor?: string;
}

export const VStack: React.FC<VStackProps> = ({
  children,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className={vstack({ className })}
      {...props}
    >
      {children}
    </div>
  );
};
