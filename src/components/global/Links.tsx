import { useLocation } from 'react-router-dom'; 
import Link from '@/components/ui/link';
import { NAV_LINKS } from '@/data/navLinks';

export default function Links() {
  const location = useLocation();
  const path = location.pathname;

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
