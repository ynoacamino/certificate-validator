import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from '@/components/ui/link';
import ThemeToggleMobile from '@/components/ui/themeToogleMobile';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/data/navLinks';

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        type="button"
        aria-label="mas opciones"
        onClick={handleClick}
      >
        <Menu />
      </Button>
      <button
        className={cn('fixed inset-0 z-20 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 cursor-default h-screen w-full', { 'left-[-100vw] opacity-0': !isOpen })}
        id="backgroundModal"
        onClick={handleClick}
        type="button"
        aria-hidden
      />
      <nav
        className={cn('flex flex-col items-center justify-center gap-4 fixed h-screen z-40 w-full max-w-xs bg-one dark:bg-one-dark top-0 left-0 md:hidden transition-all bg-background cursor-default shadow-zinc-500 dark:shadow-zinc-800 shadow-2xl border-r-[1px] border-zinc-300 dark:border-zinc-700', { 'left-[-100vw] opacity-0': !isOpen })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-40 flex flex-col gap-4">
          {
          NAV_LINKS.map(({ href, text }) => (
            <button type="button" onClick={handleClick} key={text}>
              <Link
                className="text-xl w-full"
                href={href}

              >
                {text}
              </Link>
            </button>
          ))
        }
        </div>
        <ThemeToggleMobile />
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden w-14 h-14 mt-10"
          type="button"
          aria-label="mas opciones"
          onClick={handleClick}
        >
          <X className="w-16 h-16 stroke-1" />
        </Button>
      </nav>

    </>
  );
}
