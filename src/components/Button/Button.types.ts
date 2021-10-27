import { MouseEventHandler } from 'react';

export type ButtonProps = {
  type: 'primary' | 'secondary' | 'error';
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
