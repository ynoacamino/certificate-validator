import { Certificate } from '@/types/certificate';
import { CertificateCart } from './CertificateCart';
import { SERVER_URL } from '@/data/globalConfig';

const getCertificates = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/certificate/list`);
    const data = await response.json();
    return data as Certificate[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export async function ListCertificates() {
  const certificates = await getCertificates();
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-primary-title">
        Lista de certificados
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          certificates.map(({
            id, image, lastName, name, title,
          }) => (
            <CertificateCart
              key={id}
              image={image}
              title={title}
              name={name}
              lastName={lastName}
              id={id}
            />
          ))
        }
      </div>
    </div>
  );
}
