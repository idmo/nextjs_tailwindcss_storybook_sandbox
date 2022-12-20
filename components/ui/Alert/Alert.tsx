import { type VariantProps } from "class-variance-authority";

import { alert } from "@/components/Brand/Brand";

export interface AlertProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alert> {
  /** States the purpose of the alert  */
  title: string;

  /** Provides an explanation why you're seeing the Alert */
  children: any;

  /** For passing components. Usually buttons */
  actions?: Array<any>;
}

export const Alert: React.FC<AlertProps> = ({
  intent,
  title,
  actions,
  className,
  children,
  ...props
}) => {
  return (
    <div className={alert({ intent, className })} {...props}>
      {intent ? <span>{displayIntent([intent])}</span> : null}
      <section>
        <header>{title}</header>
        <main>{children}</main>
        <footer>{actions?.map((action) => action)}</footer>
      </section>
    </div>
  );
};

const displayIntent = (intent: [string | any]) => {
  /** Depending on what the intent value is, display an emoji. Otherwise don't show anything. */
  console.log(intent);
  switch (intent[0]) {
    case "warning":
      return "⚠️";
    case "danger":
      return "🛑";
    case "success":
      return "✅";
    default:
      return null;
  }
};
