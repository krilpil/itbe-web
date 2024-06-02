'use client';

import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import ru from 'dayjs/locale/ru';
import dayjs from 'dayjs';

import { antDesignTheme } from '../(theme)';

dayjs.locale(ru);

export const AntDesignProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <ConfigProvider locale={ruRU} theme={antDesignTheme}>
      <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </ConfigProvider>
  );
};
