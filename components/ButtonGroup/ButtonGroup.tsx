import styles from './ButtonGroup.scss';

export interface ButtonGroupProps {
  prop?: string;
}

export function ButtonGroup({prop = 'default value'}: ButtonGroupProps) {
  return <div className={styles.ButtonGroup}>ButtonGroup {prop}</div>;
}
