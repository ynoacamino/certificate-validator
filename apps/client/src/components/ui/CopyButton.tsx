'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      });
  };

  return (
    <Button size="icon" onClick={copyToClipboard}>
      {
        copied ? (
          <Check />
        ) : (
          <Copy />
        )
      }
    </Button>
  );
}
