export interface PanelProps {
  prop?: string;
}

export function Panel({ prop = "default value" }: PanelProps) {
  /** Is this where I should put it */
  return <div className={""}>Panel {prop}</div>;
}
