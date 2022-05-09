import { FunctionComponent, ReactNode, useContext } from "react";
import {
  ThemeProvider as TProvider,
  ThemeContext as TContext,
} from "styled-components";
import { defaultTheme } from ".";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  return <TProvider theme={defaultTheme}>{children}</TProvider>;
};

const useTheme = () => {
  const currentTheme = useContext(TContext);
  return currentTheme;
};

export { ThemeProvider, useTheme };
