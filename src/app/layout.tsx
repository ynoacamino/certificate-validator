import './globals.css';

import { Open_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/providers/ThemeProvider';

import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import ProgressBarProvider from '@/components/providers/ProgressBarProvider';
import { Toaster } from '@/components/ui/toaster';

import '@/config/env';

export { metadata } from '@/config/metadata';

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
            <Toaster />
          </ThemeProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
