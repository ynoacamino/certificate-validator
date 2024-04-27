'use client';

import { usePathname } from 'next/navigation';
import Link from '@/components/ui/link';

export default function Links() {
  const path = usePathname();

  const NAVLINKS = [
    { href: '/', text: 'Inicio' },
    { href: '/about', text: 'Acerca de' },
    { href: '/blog', text: 'Blog' },
    { href: '/contact', text: 'Contacto' },
  ];

  return (
    <div className="md:flex gap-2 hidden font-semibold">
      {
      NAVLINKS.map(({ href, text }) => (
        <Link className="text-base" href={href} key={text} isSelect={path.includes(href) && href !== '/'}>
          {text}
        </Link>
      ))
      }
    </div>
  );
}
