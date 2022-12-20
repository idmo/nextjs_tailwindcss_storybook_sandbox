import styles from './Badge.scss';

export interface BadgeProps {
  prop?: string;
}

export function Badge({prop = 'default value'}: BadgeProps) {
  return <div className={styles.Badge}>Badge {prop}</div>;
}
