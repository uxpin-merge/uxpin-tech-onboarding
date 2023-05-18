import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from './boilerplate-theme';

const theme = createTheme(boilerplateTheme);

export default function UXPinWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
