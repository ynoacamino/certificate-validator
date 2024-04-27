import Link from 'next/link';
import IEEETitle from '../logos/IEEETitle';
import { NAV_LINKS } from '@/data/navLinks';

export default function Footer() {
  return (
    <footer className="w-full border-t border-section pt-6 flex justify-center items-start">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl mb-6 gap-x-10 gap-y-14 px-6">
        <div className="w-full flex justify-center lg:justify-start">
          <IEEETitle className="w-full max-w-[200px] h-auto" />
        </div>
        <div className="w-full max-w-3xl flex justify-end items-start col-span-1 lg:col-span-2 flex-col lg:flex-row lg:justify-self-end justify-self-center">
          <div className="flex flex-col gap-2">
            {
              NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-center w-full hover:underline"
                >
                  {link.text}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
}
