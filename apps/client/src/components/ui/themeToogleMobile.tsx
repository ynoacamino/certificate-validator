'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Button } from './button';

export default function ThemeToggleMobile() {
  const { setTheme, theme } = useTheme();
  const [realTeam, setRealTheme] = useState('');

  useEffect(() => {
    setRealTheme(theme || 'light');
  }, [theme]);

  return (
    <div className="flex items-center gap-6 justify-center mt-10">
      <Button
        size="icon"
        variant="outline"
        onClick={() => setTheme('light')}
        className={cn({ 'bg-primary-title': realTeam === 'light' })}
      >
        <Sun />
        <span className="sr-only">Tema claro</span>
      </Button>

      <Button
        size="icon"
        variant="outline"
        onClick={() => setTheme('dark')}
        className={cn({ 'bg-primary-title text-white': realTeam === 'dark' })}
      >
        <Moon />
        <span className="sr-only">Tema oscuro</span>
      </Button>
      <Button
        size="icon"
        variant="outline"
        onClick={() => setTheme('system')}
        className={cn({ 'bg-primary-title': realTeam === 'system' })}
      >
        <Monitor />
        <span className="sr-only">Tema del sistema</span>
      </Button>
    </div>
  );
}
