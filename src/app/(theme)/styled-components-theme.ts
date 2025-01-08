import { DefaultTheme } from 'styled-components';

import { breakpoints } from '@/shared/config';

const styledComponentsTheme: DefaultTheme = {
  colors: {
    black: '#1a1a1a',
    white: '#f1f1f1',
    gray: '#919191',
  },
  breakpoints: {
    maxMobile: `${breakpoints.maxMobile}px`,
    maxTablets: `${breakpoints.maxTablets}px`,
    maxLaptops: `${breakpoints.maxLaptops}px`,
    maxOldDesktops: `${breakpoints.maxOldDesktops}px`,
    maxDesktops: `${breakpoints.maxDesktops}px`,
  },
};

export default styledComponentsTheme;
