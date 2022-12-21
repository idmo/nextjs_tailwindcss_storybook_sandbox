/**
 * A container for multiple buttons.
 *
 * @export
 * @interface ButtonGroupProps
 */
export interface ButtonGroupProps {
  prop?: string;
}

export function ButtonGroup({ prop = "default value" }: ButtonGroupProps) {
  return <div className={""}>ButtonGroup {prop}</div>;
}
