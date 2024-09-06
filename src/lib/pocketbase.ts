import { BACKEND_URL } from '@/config/global';
import { Certificate, Collections } from '@/types/certificate';
import PocketBase from 'pocketbase';

let client: PocketBase | null = null;

export const pb = {
  connect: () => {
    if (!client) {
      client = new PocketBase(BACKEND_URL);
    }
    return client;
  },
  searchUUID: async ({ uuid } :{ uuid:string }) => {
    const c = pb.connect();

    const certificate = await c.collection(Collections.CERTIFICATES).getOne(uuid);

    return certificate as Certificate;
  },
};
