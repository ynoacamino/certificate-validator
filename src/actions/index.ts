'use server';

import { redirect } from 'next/navigation';
import { pb } from '@/lib/pocketbase';
import { CollectionsFields } from '@/types/certificate';

export const searchUuid = async (prevState: { error: string }, formData: FormData) => {
  const uuid = formData.get('uuid') as string;

  let certificate;
  try {
    certificate = await pb.searchUUID({ uuid });
  } catch (e) {
    return { error: 'Certificate not found' };
  }

  if (!certificate) {
    return { error: 'Certificate not found' };
  }

  return redirect(`/certificates/${certificate[CollectionsFields.ID]}`);
};
