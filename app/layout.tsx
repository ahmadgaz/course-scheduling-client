import '@/app/global.css';
import { inter } from '@/components/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: '',
  },
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
