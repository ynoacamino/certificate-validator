import Link from 'next/link';
import { NAV_LINKS } from '@/data/navLinks';
import IEEETitle from '../logos/IEEETitle';

export default function Footer() {
  return (
    <footer className="w-full border-t border-section py-5 flex justify-center items-start">
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full max-w-7xl gap-x-10 gap-y-14 px-6">
        <div className="w-full flex justify-center lg:justify-start">
          <IEEETitle className="w-full h-auto max-w-[180px]" />
        </div>
        <div className="w-full max-w-3xl flex justify-end items-center col-span-1 lg:col-span-2 flex-col lg:flex-row lg:justify-self-end justify-self-center">
          <div className="flex flex-col gap-2 justify-center">
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
