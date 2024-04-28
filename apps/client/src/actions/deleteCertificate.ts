'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { SERVER_URL } from '@/data/globalConfig';

export const deleteCertificateAction = async (formData: FormData) => {
  const id = formData.get('id') as string;

  const response = await fetch(`${SERVER_URL}/certificate/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  }).then((res) => res.json());

  if (response.error) {
    console.error(response.error);
    return;
  }

  revalidatePath('/admin');
  redirect('/admin');
};
