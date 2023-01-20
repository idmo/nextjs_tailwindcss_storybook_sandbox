import { type VariantProps } from "class-variance-authority";
import { wrapper } from "@/components/Brand";

export interface WrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapper> {
  children: any;
}

export function Wrapper({ children, alignment, spacing }: WrapperProps) {
  return <div className={wrapper({ alignment, spacing })}>{children}</div>;
}
