import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from './boilerplate-theme';

const theme = createTheme(boilerplateTheme);

const UXPinWrapper: FC<PropsWithChildren> = ({ children }) => {
  const icons = document.createElement('link') as HTMLLinkElement;
  icons.setAttribute('rel', 'stylesheet');
  icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
  document.head.appendChild(icons);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default UXPinWrapper;
