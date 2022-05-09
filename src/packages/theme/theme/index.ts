import { DefaultTheme } from "styled-components";
import { ThemeProvider, useTheme } from "./Context";
import { colors } from "./colors";
import spaces from "./spaces";

const defaultTheme: DefaultTheme = {
  colors: {
    ...colors,
  },
  spaces,
};

export { ThemeProvider, useTheme, defaultTheme };
