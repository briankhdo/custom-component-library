import { createGlobalStyle } from 'styled-components';
import { themeGet } from './packages/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${themeGet('colors.color')};
    background-color: ${themeGet('colors.backgroundColor')};
    --duration: 0.5s;
    --timing: ease;
    transition: color var(--duration) var(--timing),
      background-color var(--duration) var(--timing);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
