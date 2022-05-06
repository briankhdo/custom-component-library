/**
 * Use for quick get theme in styled components.
 */
import get from './get';
import { DefaultTheme } from 'styled-components';

const themeGet = (path: string): any => ({ theme }: { theme: DefaultTheme }) =>
  get(theme, path);

export default themeGet;
