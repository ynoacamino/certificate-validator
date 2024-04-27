'use client';

import { usePathname } from 'next/navigation';
import Link from '@/components/ui/link';
import { NAV_LINKS } from '@/data/navLinks';

export default function Links() {
  const path = usePathname();

  return (
    <div className="md:flex gap-2 hidden font-semibold">
      {
      NAV_LINKS.map(({ href, text }) => (
        <Link className="text-base" href={href} key={text} isSelect={path.includes(href) && href !== '/'}>
          {text}
        </Link>
      ))
      }
    </div>
  );
}
