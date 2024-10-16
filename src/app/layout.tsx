import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css';
import { ApolloWrapper } from '@/lib/graphql/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Map Sights',
  description: 'Locate interesting sights',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}