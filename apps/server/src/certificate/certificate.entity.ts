import z from 'zod';

export type NewCertificate = {
  name: string;
  lastName: string;
  title: string;
  image: string;
};

export type EditCertificate = {
  id: string;
  name: string;
  lastName: string;
  title: string;
  image: string;
};

export const certificateSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  title: z.string(),
});

export const editCertificateSchema = z.object({
  id: z.string(),
  name: z.string(),
  lastName: z.string(),
  title: z.string(),
});
