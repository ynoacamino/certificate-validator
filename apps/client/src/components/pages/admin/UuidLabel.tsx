/* eslint-disable prefer-arrow-callback */

'use client';

import { forwardRef, useImperativeHandle, useState } from 'react';
import { Button } from '@/components/ui/button';
import { SERVER_URL } from '@/data/globalConfig';

export const UuidLabel = forwardRef(function Uuid({
  edit = false, defaultValue = '',
}: { edit?: boolean, defaultValue?: string }, ref) {
  const [uuid, setUuid] = useState(defaultValue);

  const generate = async () => {
    const response = await fetch(`${SERVER_URL}/uuid`);

    const data = await response.json();

    if (data?.error) {
      return;
    }

    setUuid(data.uuid);
  };

  useImperativeHandle(ref, () => ({
    clear: () => setUuid(''),
  }), []);

  return (
    <label className="flex flex-col">
      <span>
        Uuid:
      </span>
      <div className="w-full flex gap-2">
        <input
          className="bg-accent p-2 rounded-md flex-1"
          type="text"
          placeholder="xxxxxxxx-xxxx-xxxx"
          readOnly
          value={uuid}
          name="uuid"
        />
        <Button onClick={generate} type="button" disabled={edit}>
          Generar
        </Button>
      </div>
    </label>
  );
});
