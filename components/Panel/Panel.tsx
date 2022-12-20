import styles from './Panel.scss';

export interface PanelProps {
  prop?: string;
}

export function Panel({prop = 'default value'}: PanelProps) {
  return <div className={styles.Panel}>Panel {prop}</div>;
}
