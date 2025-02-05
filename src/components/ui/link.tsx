import {Link as RouterLink} from 'react-router-dom';
import { cn } from '@/lib/utils';

type LinkProps = {
  children: React.ReactNode,
  className?: string,
  href: string,
  props?: any,
  size?: 'default' | 'sm' | 'lg' | 'icon',
  isSelect?: boolean,
};

export default function Link({
  children, className = '', href, size = 'default', isSelect = false, ...props
}: LinkProps) {
  return (
    <RouterLink
      to={href}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground',
        {
          'h-10 px-4 py-2': size === 'default',
          'h-9 rounded-md px-3': size === 'sm',
          'h-11 rounded-md px-8': size === 'lg',
          'h-10 w-10': size === 'icon',
        },
        {
          'bg-accent text-accent-foreground hover:cursor-default': isSelect,
        },
        className,
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
