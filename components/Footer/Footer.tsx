import { cva, type VariantProps } from "class-variance-authority";

const footer = cva("bg-gray");

export interface FooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof footer> {
  children: any;
  backgroundColor?: string;
}

export const Footer: React.FC<FooterProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <div style={{ backgroundColor }} className={footer({})} {...props}>
        Footer
      </div>
    </>
  );
};
