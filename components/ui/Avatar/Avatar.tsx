import { type VariantProps } from "class-variance-authority";
import { avatar } from "@/components/Brand/Brand";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatar> {
  children: string;
  backgroundColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size,
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <div style={{ backgroundColor }} className={avatar({ size })} {...props}>
      <span>{children.slice(0, 1)}</span>
    </div>
  );
};
