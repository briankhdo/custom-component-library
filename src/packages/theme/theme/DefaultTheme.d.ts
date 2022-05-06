/**
 * Implement interface of default theme
 */
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      color: string;
      backgroundColor: string;
      backgroundColorInverse: string;
    };
    spaces: Array;
  }
}
