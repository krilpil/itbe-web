import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      gray: string;
    };
    breakpoints: {
      maxMobile: string;
      maxTablets: string;
      maxLaptops: string;
      maxOldDesktops: string;
      maxDesktops: string;
    };
  }
}
