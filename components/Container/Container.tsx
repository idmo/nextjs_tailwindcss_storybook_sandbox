import { type VariantProps } from "class-variance-authority";
import { theme } from "../Brand";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof theme> {
  children: any;
  backgroundColor?: string;
}

export const Container: React.FC<ContainerProps> = ({
  element,
  children,
  ...props
}) => {
  return (
    <>
      <div className={theme({ element })} {...props}>
        {children}
      </div>
    </>
  );
};
