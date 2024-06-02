import { DefaultTheme } from 'styled-components';

import { breakpoints } from '@/shared/config';

const styledComponentsTheme: DefaultTheme = {
  font: {
    size10: '10px',
    size12: '12px',
    size14: '14px',
    size16: '16px',
    size20: '20px',
    size24: '24px',
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
