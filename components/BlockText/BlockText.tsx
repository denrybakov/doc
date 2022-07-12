import React, { ReactNode } from 'react';
import styles from './blocktext.module.css';

export type TBlockText = 'p' | 'div'

export interface IBlockText {
  children: ReactNode
  As?: TBlockText
}

export function BlockText({ children, As = 'p' }: IBlockText) {
  return (
    <As className={styles.blockText}>
      {children}
    </As>
  );
}
