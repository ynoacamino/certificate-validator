'use client';

import { EventIEEE } from '@/data/events';
import { useGallery } from '@/lib/hooks';
import Image from 'next/image';

export function Photos({ PHOTOS, id }: { PHOTOS: EventIEEE[], id: string }) {
  useGallery({ id });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6" id={id}>
      {PHOTOS.slice(0, 3).map(({ poster, title }) => (
        <a
          href={poster.full}
          data-pswp-width={poster.width}
          data-pswp-height={poster.height}
          key={crypto.randomUUID()}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          <Image
            key={crypto.randomUUID()}
            className="aspect-square w-full rounded-lg bg-web-gray-100 object-cover"
            src={poster.thumbnail}
            alt={title}
            width={600}
            height={600}
          />
        </a>
      ))}
    </div>
  );
}
