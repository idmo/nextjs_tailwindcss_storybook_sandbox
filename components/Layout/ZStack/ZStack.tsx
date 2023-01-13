import styles from './ZStack.scss';

export interface ZStackProps {
  prop?: string;
}

export function ZStack({prop = 'default value'}: ZStackProps) {
  return <div className={styles.ZStack}>ZStack {prop}</div>;
}
