import { BACKEND_URL } from '@/config/global';
import { Certificate, Collections } from '@/types/certificate';
import PocketBase from 'pocketbase';

export const pb = {
  searchUUID: async ({ uuid } :{ uuid:string }) => {
    console.log(BACKEND_URL)
    const c = new PocketBase(BACKEND_URL);

    console.log('searchUUID', uuid);

    try {
      const certificate = await c
        .collection(Collections.CERTIFICATES)
        .getOne(uuid, { requestKey: crypto.randomUUID() });
  
      console.log('certificate', certificate);
  
      return certificate as Certificate;
    } catch (error) {
      console.error('searchUUID', error);
      return null;
    }
  },
};
