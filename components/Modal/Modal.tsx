import styles from './Modal.scss';

export interface ModalProps {
  prop?: string;
}

export function Modal({prop = 'default value'}: ModalProps) {
  return <div className={styles.Modal}>Modal {prop}</div>;
}
