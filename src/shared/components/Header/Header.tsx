import React from 'react';
import { Button } from '../Button';
import { ExportIcon } from '../Icons/ExportIcon';
import styles from './header.css';

export function Header() {
  const title = 'DMS 2.0 / 02.09.2022-31.12.2022'
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <Button icon={<ExportIcon />} title={'Export'}/>
    </header>
  );
}
