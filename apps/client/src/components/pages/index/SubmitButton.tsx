'use client';

import { useFormStatus } from 'react-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Spiner } from '@/components/ui/spiner';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button size="icon" className="w-16 md:w-24 h-14 md:h-20" type="submit">
      {
        pending ? (
          <Spiner />
        ) : (
          <Search className="text-primary-foreground w-9 h-9" />
        )
      }
    </Button>
  );
}
