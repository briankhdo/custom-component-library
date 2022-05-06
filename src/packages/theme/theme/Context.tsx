import { FunctionComponent, ReactNode, createContext, useContext } from "react";
import {
  ThemeProvider as TProvider,
  ThemeContext as TContext,
} from "styled-components";
import { defaultTheme } from ".";

type ThemeContextType = {
  switchTheme: (newTheme: string) => void;
};

const ThemeContext = createContext({
  switchTheme: () => {},
} as ThemeContextType);

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

export { ThemeContext, ThemeProvider, useTheme };
