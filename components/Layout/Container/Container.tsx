import { type VariantProps } from "class-variance-authority";
import { container } from "@/components/Brand";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  children: any;
}

export const Container: React.FC<ContainerProps> = ({
  context,
  children,
  className,
  ...props
}) => {
  return (
    <div className={container({ className, context })} {...props}>
      {children}
    </div>
  );
};
