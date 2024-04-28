import { EditCertificate } from '@/components/pages/admin/EditCertificate';
import { SERVER_URL } from '@/data/globalConfig';
import { Certificate } from '@/types/certificate';

export const revalidate = 0;

const getCertificate = async ({ id }: { id: string }): Promise<Certificate> => {
  const response = await fetch(`${SERVER_URL}/certificate/validate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data as Certificate;
};

export default async function EditCertificatePage({ params }: { params: { id: string } }) {
  const certificate = await getCertificate({ id: params.id });

  return (
    <div className="w-full max-w-7xl px-6 my-10 flex flex-col gap-8">
      <EditCertificate
        image={certificate.image}
        name={certificate.name}
        lastName={certificate.lastName}
        title={certificate.title}
        id={certificate.id}
      />
    </div>
  );
}
