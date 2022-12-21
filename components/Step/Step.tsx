export interface StepProps {
  prop?: string;
}

export function Step({ prop = "default value" }: StepProps) {
  return <div className={""}>Step {prop}</div>;
}
