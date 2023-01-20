import { type VariantProps } from "class-variance-authority";
import { token } from "@/components/Brand";

export interface TokenProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof token> {
  children: any;
}

export function Token({ children, size }: TokenProps) {
  return <div className={token({ size })}>{children}</div>;
}
