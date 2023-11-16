import { FC, PropsWithChildren } from 'react';
// import { Theme } from '@radix-ui/themes';

// import '@radix-ui/themes/styles.css';

export type DefaultThemeProps = PropsWithChildren<{}>;

export const DefaultTheme: FC<DefaultThemeProps> = ({ children }) => (
  <>
    {children}
  </>
);
