import React, { CSSProperties, ReactNode } from 'react';
import styles from './text.module.css';

export enum EColor {
  primary = 'primary',
  secondary = 'secondary'
}

export type TText = 'span' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div'

export interface IText {
  children?: ReactNode
  As?: TText
  color?: EColor
  bold?: boolean
  center?: boolean
  style?: CSSProperties
}

export function Text({
  children,
  As = 'span',
  color = EColor.primary,
  bold = false,
  center = false,
  style
}: IText) {
  return (
    <As
      style={style}
      className={
        `${styles.text}  ${bold ? styles.bold : ''} ${color === EColor.secondary ? styles.secondary : ''} ${center ? styles.center : ''}`
      }>
      {children}
    </As>
  );
}
