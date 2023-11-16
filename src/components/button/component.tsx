import type { ComponentProps, FC, PropsWithChildren } from 'react';
// import { Button as RadixButton } from '@radix-ui/themes';

// export type ButtonProps = ComponentProps<{}>;
export type ButtonProps = PropsWithChildren<{}>;

export const Button: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button {...buttonProps}>
      {children}
    </button>
  )
}
