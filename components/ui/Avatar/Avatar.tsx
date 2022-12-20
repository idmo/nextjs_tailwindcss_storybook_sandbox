import { type VariantProps, cx } from "class-variance-authority";
import { avatar, theme } from "@/components/Brand";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatar> {
  children: string;
  backgroundColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size,
  className,
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className={avatar({ size, className })}
      {...props}
    >
      <span>{children.slice(0, 1)}</span>
    </div>
  );
};
