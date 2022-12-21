import { type VariantProps } from "class-variance-authority";

import { action } from "@/components/Brand/Brand";

export interface ActionProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof action> {
  label?: string;
  onClick?: () => void;
}

export const Action: React.FC<ActionProps> = ({
  /**
   * Element for single events like create, delete, and cancel.
   */

  label,
  context,
  className,
  ...props
}) => {
  return (
    <button className={action({ context, className })} {...props}>
      {""}
      {label}
    </button>
  );
};
