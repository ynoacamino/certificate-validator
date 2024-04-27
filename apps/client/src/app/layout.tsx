import './globals.css';
import type { Metadata } from 'next';

import { Open_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/providers/ThemeProvider';

import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import ProgressBarProvider from '@/components/providers/ProgressBarProvider';

export const metadata: Metadata = {
  title: 'IEEE UNSA | Student Chapter',
  description: 'Pagina web oficial del capitulo estudiantil de la IEEE de la Universidad Nacional de San Agustin.',
  authors: [{ name: 'Yenaro Joel Noa Camino', url: 'https://github.com/ynoacamino' }],
  creator: 'Yenaro Joel Noa Camino',
  publisher: 'IEEE UNSA',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ieee-ynoacamino.vercel.app/',
    title: 'IEEE UNSA | Student Chapter',
    description: 'Pagina web oficial del capitulo estudiantil de la IEEE de la Universidad Nacional de San Agustin.',
    images: [
      {
        url: 'https://res.cloudinary.com/dux0sb99g/image/upload/v1710895172/porqqrmrf3l1xyhhjsu2.webp ',
        width: 600,
        height: 407,
        alt: 'IEEE UNSA | Student Chapter',
      },
    ],
    siteName: 'IEEE UNSA',
  },
  twitter: {
    creator: '@ynoacamino',
    site: 'https://github.com/ynoacamino',
    description: 'Pagina web oficial del capitulo estudiantil de la IEEE de la Universidad Nacional de San Agustin.',
    images: [
      {
        url: 'https://res.cloudinary.com/dux0sb99g/image/upload/v1710895172/porqqrmrf3l1xyhhjsu2.webp ',
        width: 600,
        height: 407,
        alt: 'IEEE UNSA | Student Chapter',
      },
    ],
    title: 'IEEE UNSA | Student Chapter',
  },
  metadataBase: new URL('https://ieee-ynoacamino.vercel.app/'),
};

const open_sans = Open_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background flex flex-col justify-start items-center text-primary min-h-screen',
          open_sans.className,
        )}
      >
        <ProgressBarProvider>
          <ThemeProvider>
            <Header />
            <main className="flex flex-col items-center w-full flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
