import { ThemeConfig } from 'antd/es/config-provider/context';

export const antDesignTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1a1a1a',
  },
  components: {
    Tabs: {
      colorText: '#999999',
      cardBg: '#f8f8f8',
      colorPrimaryHover: '#999999',
      colorPrimaryActive: '#999999',
      // colorBgContainer: 'blue',
    },
    Button: {
      colorLink: '#1a1a1a',
    },
  },
};
