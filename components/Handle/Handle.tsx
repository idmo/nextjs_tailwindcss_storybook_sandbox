import { type VariantProps } from "class-variance-authority";
import { handle } from "@/components/Brand";

export interface HandleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof handle> {}
/**
 * UI element for grabbing a draggable item.
 *
 */
export function Handle({ size }: HandleProps) {
  return <div className={handle({ size })}></div>;
}
