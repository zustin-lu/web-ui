import type { FunctionComponent } from 'react';

export type ButtonProps = {
  name: string;
  variant: 'big' | 'small';
}

export const Button: FunctionComponent<ButtonProps> = () => {
  return (
    <button>This is button</button>
  )
}
