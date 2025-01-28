 

import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './button';

export function CopyButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      });
  };

  useEffect(() => {
    setValue(window.location.href);
  }, [id]);

  return (
    <div className="w-full flex gap-2 mt-10">
      <input
        type="text"
        className="bg-accent rounded-lg p-2 w-full max-w-3xl placeholder:text-primary/30"
        value={value}
        disabled
      />
      <Button size="icon" onClick={copyToClipboard}>
        {
        copied ? (
          <Check />
        ) : (
          <Copy />
        )
      }
      </Button>
    </div>
  );
}
