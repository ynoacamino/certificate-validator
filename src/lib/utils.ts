import { BACKEND_URL } from '@/config/global';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImageUrl = ({
  url,
  collectionId,
  id,
}: {
  url: string;
  collectionId: string;
  id: string;
}) => `${BACKEND_URL}/api/files/${collectionId}/${id}/${url}`;

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const expandFields = (fields: string[]) => fields.join(',');
