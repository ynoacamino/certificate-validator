'use client';

import { useEffect } from 'react';

export function ImageLabel(
  {
    setImage, required = false, initialImage,
  }: {
    setImage: (image: File) => void, required?: boolean, initialImage?: string
  },
) {
  useEffect(() => {
    if (!initialImage) return;
    const fetchImage = async () => {
      try {
        const response = await fetch(initialImage);
        const data = await response.blob();
        const metadata = { type: data.type };
        const file = new File([data], 'filename', metadata);
        setImage(file);
      } catch (error) {
        console.error('Error fetching image: ', error);
      }
    };

    fetchImage();
  }, [initialImage, setImage]);
  return (
    <label className="flex flex-col w-full">
      <span>Imagen:</span>
      <input
        type="file"
        required={required}
        onChange={(e) => {
          if (e.target.files) {
            setImage(e.target.files[0]);
          }
        }}
        accept="image/*"
      />
    </label>
  );
}
