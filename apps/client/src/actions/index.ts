'use server';

import { redirect } from 'next/navigation';
import { SERVER_URL } from '@/data/globalConfig';

export const searchUuid = async (prevState: { error: string }, formData: FormData) => {
  const uuid = formData.get('uuid') as string;

  const response = await fetch(`${SERVER_URL}/certificate/validate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: uuid }),
  });

  const data = await response.json();

  if (data?.error) {
    return { error: 'Certificado no encontrado' };
  }

  return redirect(`/certificates/${uuid}`);
};
