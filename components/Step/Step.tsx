import styles from './Step.scss';

export interface StepProps {
  prop?: string;
}

export function Step({prop = 'default value'}: StepProps) {
  return <div className={styles.Step}>Step {prop}</div>;
}
