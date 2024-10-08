import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ChakraProviders } from '@/provider/chakra.provider';
import { Footer, Navbar, PopupWidget } from '@/components';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Devolution',
  description: 'Your Development Solution',
  icons: {
    icon: '/img/logo-devolution.png', // /public path
    // icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProviders>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ChakraProviders>
      </body>
    </html>
  );
}
