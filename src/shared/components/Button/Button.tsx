import React from 'react';
import styles from './button.css';

interface IButton {
  icon: React.ReactNode;
  title: string;
}

export function Button({icon, title}: IButton) {
  return (
    <button className={styles.button}>
      {icon}
      {title}
    </button>
  );
}
