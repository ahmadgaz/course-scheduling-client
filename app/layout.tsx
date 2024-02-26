import { Inter } from 'next/font/google';

import '@/app/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.00, maximum-scale=2.00, minimum-scale=10.00"
        />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
