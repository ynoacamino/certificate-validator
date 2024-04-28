import { revalidatePath } from 'next/cache';

export async function POST() {
  revalidatePath('/admin', 'page');

  return Response.json({ status: 'ok' });
}
