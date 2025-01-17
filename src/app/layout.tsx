import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

import { siteConfig, fontSans } from '@/shared/config';

import { Providers } from './(providers)';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
