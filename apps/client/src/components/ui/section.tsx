import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  bgDirection: 'r' | 'l';
}

export function Section(
  {
    className, children, bgDirection, ...props
  }:
  SectionProps,
) {
  return (
    <section
      className={cn('w-full py-32 border-t border-section flex items-center justify-center px-6', className, {
        'bg-gradient-r dark:bg-gradient-r-dark': bgDirection === 'r',
        'bg-gradient-l dark:bg-gradient-l-dark': bgDirection === 'l',
      })}
      {...props}
    >
      {children}
    </section>
  );
}
