import { Inter as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
