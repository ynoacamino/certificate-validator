import { cn } from '@/lib/utils';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import { Toaster } from '@/components/ui/toaster';

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div
      className={cn(
        'bg-background flex flex-col justify-start items-center text-primary min-h-screen',
      )}
    >
      <Header />
      <main className="flex flex-col items-center w-full flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
