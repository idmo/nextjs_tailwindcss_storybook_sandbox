import styles from './Container.scss';

export interface ContainerProps {
  prop?: string;
}

export function Container({prop = 'default value'}: ContainerProps) {
  return <div className={styles.Container}>Container {prop}</div>;
}
