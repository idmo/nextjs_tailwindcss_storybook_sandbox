import { cva, type VariantProps } from "class-variance-authority";

const avatar = cva(
  "rounded-full border-2 border-gray-500 flex flex-col text-center justify-center align-middle font-semibold bg-gray-50",
  {
    variants: {
      intent: {
        small: "h-6 w-6 text-sm",
        medium: "h-9 w-9 text-md",
        large: "h-12 w-12 text-2xl",
      },
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatar> {
  children: string;
  backgroundColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  intent,
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <div style={{ backgroundColor }} className={avatar({ intent })} {...props}>
      <span>{children.slice(0, 1)}</span>
    </div>
  );
};
