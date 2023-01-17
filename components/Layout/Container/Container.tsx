import { type VariantProps } from "class-variance-authority";
import { container } from "@/components/Brand";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  children: any;
  backgroundColor?: string;
}

export const Container: React.FC<ContainerProps> = ({
  //** A generic View */
  context,
  size,
  children,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className={container({ context, size, className })}
      {...props}
    >
      {children}
    </div>
  );
};
